import React from "react";

export const Avatar = ({ children, className }) => (
  <div className={`rounded-full bg-gray-200 flex items-center justify-center ${className}`}>
    {children}
  </div>
);

export const AvatarImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="rounded-full object-cover w-full h-full" />
);

export const AvatarFallback = ({ children }) => (
  <div className="flex items-center justify-center w-full h-full text-gray-700">
    {children}
  </div>
);
