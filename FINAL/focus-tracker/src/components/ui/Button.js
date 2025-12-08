import React from "react";
import cx from "classnames";

const Button = (props) => {
  // destructuring props object
  const { children, primary, warning, secondary, ...otherProps } = props;

  // building the classname string with cx (combines regular strings with conditional classes)
  const classes = cx(
    // base class that every button gets
    "inline-flex items-center justify-center px-4 py-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
    otherProps.className,
    {
      // conditional classes based on which variant prop is true
      "bg-stone-900 border border-transparent font-normal text-white hover:bg-stone-800":
        primary,
      "bg-red-600 border border-transparent font-normal text-white hover:bg-red-700":
        warning,
      "border border-stone-900 font-medium text-stone-900 hover:bg-stone-100":
        secondary,
    }
  );

  // spread otherProps to pass through things like onClick, etc
  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
};

export default Button;
