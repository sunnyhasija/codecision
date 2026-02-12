"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, description, children, className = "" }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -2, borderColor: "rgba(99, 102, 241, 0.4)" }}
      transition={{ duration: 0.2 }}
      className={`border border-border rounded-lg p-6 bg-surface ${className}`}
    >
      <h3 className="text-lg font-semibold text-text-primary mb-3">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
      {children}
    </motion.div>
  );
}
