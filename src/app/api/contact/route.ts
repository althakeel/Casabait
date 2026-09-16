import { NextRequest, NextResponse } from "next/server";
import { getEmailRuntimeConfig, isEmailConfigured } from "@/lib/email/config";
import { validateContactPayload } from "@/lib/email/validate";
import { checkRateLimit, getClientIp } from "@/lib/email/rate-limit";
import { sendContactEmails } from "@/lib/email/send-contact";

export async function POST(request: NextRequest) {
  try {
    if (!isEmailConfigured()) {
      console.error("Contact form: email environment variables are not configured");
      return NextResponse.json({ error: "UNAVAILABLE" }, { status: 503 });
    }

    const config = getEmailRuntimeConfig();
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(ip, config.rateLimitMax, config.rateLimitWindowMinutes);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "RATE_LIMIT" },
        {
          status: 429,
          headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
        }
      );
    }

    const body = await request.json();

    // Honeypot — silently accept but do not send (avoids tipping off bots)
    if (body && typeof body === "object" && typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({ success: true, message: "Message sent successfully" });
    }

    const validation = validateContactPayload(body);

    if (!validation.success) {
      return NextResponse.json({ error: "VALIDATION", message: validation.error }, { status: 400 });
    }

    const submission = {
      ...validation.data,
      submittedAt: new Date(),
    };

    await sendContactEmails(submission);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json({ error: "SERVER" }, { status: 500 });
  }
}
