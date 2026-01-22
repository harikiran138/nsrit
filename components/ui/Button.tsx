"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: "btn-primary hover:opacity-90 active:scale-95",
    ghost: "btn-ghost hover:bg-primary/10 active:scale-95",
    secondary: "bg-secondary text-corporate-textPrimary hover:bg-gray-200 active:scale-95",
    danger: "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg active:scale-95",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      {...props}
      className={[
        "btn",
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        "transition-all duration-300",
        className
      ].join(" ")}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
