import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const variants = {
  primary:
    "bg-accent hover:bg-accent-hover text-white",
  secondary:
    "border border-border hover:border-text-muted text-text-primary",
  ghost:
    "text-text-secondary hover:text-text-primary",
};

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded transition-all duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
