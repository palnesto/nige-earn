import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "py-3 px-4 rounded-md font-medium transition-all duration-200 flex items-center justify-center";

  const variantClasses = {
    primary: "bg-teal-600 hover:bg-teal-700 text-white",
    secondary: "bg-lime-400 hover:bg-lime-500 text-gray-900",
    outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
