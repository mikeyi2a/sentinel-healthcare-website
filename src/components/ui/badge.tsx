import * as React from "react";

export type BadgeVariant = "light" | "dark";

export interface BadgeProps {
  /** "dark" inverts the fill for use on navy/teal sections. */
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

/**
 * The site-wide eyebrow badge: a coral marker square followed by uppercase
 * label text. Use this rather than hand-rolling a styled span.
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = "light",
  children,
  className = "",
}) => {
  const variantClasses =
    variant === "dark"
      ? "bg-[#E2F0F3]/20 text-[#E2F0F3]"
      : "bg-[#E2F0F3] text-[#0D4655]";

  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-[6px] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${variantClasses} ${className}`}
    >
      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-[2px] bg-[#FF6F4B]" />
      {children}
    </span>
  );
};

export default Badge;
