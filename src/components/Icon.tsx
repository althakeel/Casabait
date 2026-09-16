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
  MessageCircle,
  Wrench,
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
  "message-circle": MessageCircle,
  wrench: Wrench,
};

interface IconProps {
  name: keyof typeof iconMap | string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, size = 24, className = "", strokeWidth = 2 }: IconProps) {
  const IconComponent = iconMap[name] || Home;
  const strokeClass = className.includes("icon-gold")
    ? "stroke-secondary"
    : className.includes("icon-ivory")
      ? "stroke-ivory"
      : "stroke-primary";

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={`${strokeClass} ${className}`}
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
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 ${className}`}
      aria-hidden="true"
    >
      <Icon name={name} size={24} />
    </div>
  );
}
