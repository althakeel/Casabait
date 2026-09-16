import { Icon } from "@/components/Icon";



interface FeatureCardProps {

  icon: string;

  title: string;

  description: string;

  index: number;

}



export function FeatureCard({ icon, title, description, index }: FeatureCardProps) {

  return (

    <article className="group relative flex h-full flex-col rounded-lg border border-primary/10 bg-surface p-6 transition-all duration-300 hover:border-secondary/50 hover:shadow-card-hover lg:p-7">

      <span

        className="absolute right-6 top-6 font-serif text-4xl font-light text-primary/8 transition-colors group-hover:text-secondary/20"

        aria-hidden="true"

      >

        {String(index + 1).padStart(2, "0")}

      </span>

      <div

        className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-secondary/40 bg-ivory transition-colors duration-300 group-hover:border-secondary group-hover:bg-secondary/10"

        aria-hidden="true"

      >

        <Icon name={icon} size={22} className="icon-gold" />

      </div>

      <h3 className="font-serif text-lg font-semibold text-charcoal">{title}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-dark/65">{description}</p>

      <div className="mt-4 h-px w-0 bg-secondary transition-all duration-500 group-hover:w-12" aria-hidden="true" />

    </article>

  );

}

