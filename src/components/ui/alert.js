import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Alert Container
export const Alert = ({ variant = "info", className, children, ...props }) => {
  const alertClass = classNames(
    "p-4 rounded-lg flex items-start gap-4",
    {
      "bg-blue-100 text-blue-700": variant === "info",
      "bg-yellow-100 text-yellow-700": variant === "warning",
      "bg-red-100 text-red-700": variant === "error",
      "bg-green-100 text-green-700": variant === "success",
    },
    className
  );

  return (
    <div className={alertClass} {...props}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.oneOf(["info", "warning", "error", "success"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Alert Title
export const AlertTitle = ({ className, children, ...props }) => {
  const titleClass = classNames("font-bold text-lg", className);
  return (
    <div className={titleClass} {...props}>
      {children}
    </div>
  );
};

AlertTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Alert Description
export const AlertDescription = ({ className, children, ...props }) => {
  const descriptionClass = classNames("text-sm", className);
  return (
    <div className={descriptionClass} {...props}>
      {children}
    </div>
  );
};

AlertDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default { Alert, AlertTitle, AlertDescription };
