interface TestimonialCardProps {

  quote: string;

  name: string;

  role: string;

}



export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {

  return (

    <blockquote className="relative flex h-full flex-col rounded-lg border border-primary/10 border-s-[3px] border-s-secondary bg-surface p-6 shadow-card lg:p-7">

      <span className="font-serif text-6xl leading-none text-secondary/30" aria-hidden="true">

        &ldquo;

      </span>

      <p className="-mt-4 flex-1 text-sm leading-relaxed text-neutral-dark/75 lg:text-[15px] lg:leading-relaxed">

        &ldquo;{quote}&rdquo;

      </p>

      <footer className="mt-5 border-t border-primary/10 pt-4">

        <p className="font-semibold text-charcoal">{name}</p>

        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">{role}</p>

      </footer>

    </blockquote>

  );

}

