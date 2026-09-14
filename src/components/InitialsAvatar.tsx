interface InitialsAvatarProps {
  initials: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-10 w-10 text-sm",
  md: "h-16 w-16 text-lg",
  lg: "h-24 w-24 text-2xl",
};

export function InitialsAvatar({ initials, size = "md" }: InitialsAvatarProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-primary font-semibold text-white ${sizeClasses[size]}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
