import fs from "fs";
import path from "path";
import { SITE_URL as DEFAULT_SITE_URL } from "@/lib/constants";

export interface EmailJsonConfig {
  smtp: {
    host: string;
    port: number;
    secure?: boolean;
    user: string;
    pass: string;
  };
  from: {
    name?: string;
    email: string;
  };
  teamEmail: string;
}

let cachedConfig: EmailJsonConfig | null = null;

/** Resolves "${SMTP_HOST}" style placeholders from process.env */
function resolveEnvPlaceholders(value: unknown): unknown {
  if (typeof value === "string") {
    const match = value.match(/^\$\{([A-Z0-9_]+)\}$/);
    if (match) {
      const envVal = process.env[match[1]]?.trim();
      if (!envVal) {
        throw new Error(`Missing environment variable: ${match[1]} (referenced in email.json)`);
      }
      return envVal;
    }
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(resolveEnvPlaceholders);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, val]) => [key, resolveEnvPlaceholders(val)])
    );
  }

  return value;
}

function toBoolean(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value.toLowerCase() === "true";
  return false;
}

function parseEmailJson(raw: string): EmailJsonConfig {
  const resolved = resolveEnvPlaceholders(JSON.parse(raw)) as EmailJsonConfig;

  if (!resolved?.smtp?.host || !resolved?.smtp?.user || !resolved?.smtp?.pass) {
    throw new Error(
      "email.json: smtp.host, smtp.user, and smtp.pass are required (use ${SMTP_*} placeholders from .env)"
    );
  }

  if (!resolved?.from?.email) {
    throw new Error("email.json: from.email is required");
  }

  if (!resolved?.teamEmail) {
    throw new Error("email.json: teamEmail is required");
  }

  return {
    smtp: {
      host: resolved.smtp.host,
      port: Number(resolved.smtp.port) || 587,
      secure: toBoolean(resolved.smtp.secure),
      user: resolved.smtp.user,
      pass: resolved.smtp.pass,
    },
    from: {
      name: resolved.from.name,
      email: resolved.from.email,
    },
    teamEmail: resolved.teamEmail,
  };
}

export function loadEmailConfig(): EmailJsonConfig {
  if (cachedConfig) {
    return cachedConfig;
  }

  const configPath = path.join(process.cwd(), "email.json");
  if (!fs.existsSync(configPath)) {
    throw new Error(
      "Email not configured: copy email.json.example to email.json and set SMTP variables in .env.local"
    );
  }

  cachedConfig = parseEmailJson(fs.readFileSync(configPath, "utf8"));
  return cachedConfig;
}

export function isEmailConfigured(): boolean {
  try {
    loadEmailConfig();
    return true;
  } catch {
    return false;
  }
}

export function getEmailRuntimeConfig() {
  const email = loadEmailConfig();
  return {
    ...email,
    siteUrl: process.env.SITE_URL?.trim() || DEFAULT_SITE_URL,
    rateLimitMax: Number(process.env.CONTACT_RATE_LIMIT_MAX ?? "5"),
    rateLimitWindowMinutes: Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MINUTES ?? "15"),
  };
}

export function formatFromAddress(from: EmailJsonConfig["from"]): string {
  return from.name ? `"${from.name}" <${from.email}>` : from.email;
}
