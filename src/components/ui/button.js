import React from "react";

export const Button = ({ children, className, onClick, variant = "default" }) => {
  const variants = {
    default: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={`px-4 py-2 rounded-md ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
