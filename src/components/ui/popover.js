import React, { useState } from "react";

export const Popover = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => setIsOpen(!isOpen);
  const closePopover = () => setIsOpen(false);

  return (
    <div className="relative">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen,
          togglePopover,
          closePopover,
        })
      )}
    </div>
  );
};

export const PopoverTrigger = ({ children, togglePopover }) => (
  <div onClick={togglePopover}>{children}</div>
);

export const PopoverContent = ({ children, isOpen, closePopover, className }) => (
  isOpen && (
    <div
      className={`absolute right-0 mt-2 bg-white rounded-md shadow-lg z-10 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
);
