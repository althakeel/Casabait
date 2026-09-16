import Link from "next/link";
import type { Dictionary } from "@/messages/en";
import { localePath } from "@/i18n/navigation";
import type { Locale } from "@/i18n/config";

interface BlogBreadcrumbProps {
  category: string;
  locale: Locale;
  dict: Dictionary;
}

export function BlogBreadcrumb({ category, locale, dict }: BlogBreadcrumbProps) {
  return (
    <nav className="text-xs font-semibold uppercase tracking-[0.14em]" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href={localePath(locale, "/")}
            className="text-neutral-dark/50 transition-colors hover:text-primary"
          >
            {dict.common.home}
          </Link>
        </li>
        <li className="text-secondary/60" aria-hidden="true">
          /
        </li>
        <li>
          <Link
            href={localePath(locale, "/blog")}
            className="text-neutral-dark/50 transition-colors hover:text-primary"
          >
            {dict.common.blog}
          </Link>
        </li>
        <li className="text-secondary/60" aria-hidden="true">
          /
        </li>
        <li className="text-primary">{category}</li>
      </ol>
    </nav>
  );
}
