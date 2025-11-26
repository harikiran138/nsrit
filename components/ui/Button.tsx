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
    primary: "btn-primary hover:bg-blue-700 hover:shadow-lg hover:scale-105 active:scale-95",
    ghost: "btn-ghost hover:bg-blue-50 dark:hover:bg-blue-900/20 active:scale-95",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 hover:shadow-md active:scale-95",
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
