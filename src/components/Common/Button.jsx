import React from "react";

const Button = ({
  label,
  onClick,
  className = "",
  type = "button",
  variant = "primary", // primary | secondary | danger
  size = "md", // sm | md | lg
}) => {
  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-lg",
    lg: "px-12 py-4 text-xl",
  };

  // Variant classes
  const variantClasses = {
    primary:
      "border-red-300 hover:border-transparent hover:shadow-2xl hover:shadow-red-500/50",
    secondary:
      "border-red-500 hover:border-transparent hover:shadow-2xl hover:shadow-red-500/50",
    danger:
      "border-red-600 hover:border-transparent hover:shadow-2xl hover:shadow-red-500/50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative rounded-lg text-red-600 overflow-hidden group bg-transparent border transition-all duration-500 hover:text-white hover:scale-105 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {/* Background gradients */}
      <span className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-600 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-up"></span>
      <span className="absolute inset-0 bg-gradient-to-l from-red-900 via-red-500 to-red-700 rounded-lg transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-150 origin-bottom"></span>
      <span className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-lg transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 delay-300"></span>

      {/* Label */}
      <span className="relative z-10 group-hover:drop-shadow-lg transition-all duration-300">
        {label}
      </span>
    </button>
  );
};

export default Button;
