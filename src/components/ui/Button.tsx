import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
}

const variants = {
  primary:
    "bg-accent/90 hover:bg-accent text-background font-medium",
  secondary:
    "border border-border hover:border-text-muted text-text-secondary hover:text-text-primary",
};

export function Button({
  variant = "primary",
  href,
  external,
  children,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-7 py-3.5 text-[13px] tracking-wide rounded transition-all duration-300 ${variants[variant]} ${className}`;

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
