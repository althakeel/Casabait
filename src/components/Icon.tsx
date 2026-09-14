import {
  Home,
  Search,
  MapPin,
  Building2,
  Key,
  TrendingUp,
  Shield,
  Users,
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowUp,
  Bed,
  Bath,
  Maximize,
  Star,
  Check,
  Clock,
  FileText,
  Handshake,
  Calculator,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  search: Search,
  "map-pin": MapPin,
  building: Building2,
  key: Key,
  "trending-up": TrendingUp,
  shield: Shield,
  users: Users,
  phone: Phone,
  mail: Mail,
  menu: Menu,
  x: X,
  "chevron-right": ChevronRight,
  "chevron-down": ChevronDown,
  "arrow-up": ArrowUp,
  bed: Bed,
  bath: Bath,
  maximize: Maximize,
  star: Star,
  check: Check,
  clock: Clock,
  "file-text": FileText,
  handshake: Handshake,
  calculator: Calculator,
};

interface IconProps {
  name: keyof typeof iconMap | string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, size = 24, className = "", strokeWidth = 2 }: IconProps) {
  const IconComponent = iconMap[name] || Home;
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      style={{ stroke: "var(--color-primary)" }}
      aria-hidden="true"
    />
  );
}

/** Placeholder icon slot for custom icon set swap */
export function IconSlot({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      data-icon-slot={name}
      className={`flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${className}`}
      aria-hidden="true"
    >
      <Icon name={name} size={24} />
    </div>
  );
}
