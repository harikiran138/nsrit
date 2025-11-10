import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined" | "flat";
  clickable?: boolean;
};

export default function Card({
  children,
  className = "",
  variant = "default",
  clickable = false,
}: CardProps) {
  const variantClasses = {
    default:
      "border-base border rounded-lg bg-card shadow-sm hover:shadow-card transition-all duration-300",
    elevated:
      "bg-card shadow-card hover:shadow-lg hover:-translate-y-1 rounded-lg transition-all duration-300",
    outlined:
      "border-2 border-primary-200 dark:border-primary-800 rounded-lg bg-transparent hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors duration-300",
    flat:
      "bg-primary-50 dark:bg-primary-900/20 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-300",
  };

  const clickableClass = clickable ? "cursor-pointer" : "";

  return (
    <div
      className={[
        variantClasses[variant],
        clickableClass,
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}
