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
      "border-base border rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300",
    elevated:
      "bg-card shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg transition-all duration-300",
    outlined:
      "border-2 border-primary/20 rounded-lg bg-transparent hover:bg-primary/5 transition-colors duration-300",
    flat:
      "bg-secondary rounded-lg hover:bg-gray-200 transition-colors duration-300",
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
