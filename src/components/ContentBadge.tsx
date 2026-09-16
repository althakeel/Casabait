interface ContentBadgeProps {
  label: string;
}

/** Shared category/tag pill — used on Areas and Blog */
export function ContentBadge({ label }: ContentBadgeProps) {
  return (
    <span className="inline-flex items-center border border-secondary/35 bg-secondary/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
      {label}
    </span>
  );
}
