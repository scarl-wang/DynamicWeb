import React from "react";
import cx from "classnames";

// props = {
//    children: "whtever elements between the open close tag"
//    primary: true,
// }

const Button = (props) => {
  // detructuring out props object so don't have to type "props" everytime
  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    //...means unpacking something
    ...otherProps //includes all others
  } = props;
  // the line above does this with less typing
  // const children = props.children

  const classes = cx(
    "flex items-center px-8 py-3 border",
    otherProps.className,
    {
      "bg-blue-500 border-blue-500 text-white": primary,
      "bg-gray-700 border-gray-700 text-white": secondary,
      "bg-green-500 border-green-500 text-white": success,
      "bg-orange-400 border-orange-400 text-white": warning,
      "bg-red-600 border-red-600 text-white": danger,
      //rounded
      "rounded-full": rounded,
      //outline
      "bg-white": outline,
      //outline variation in text color
      "text-blue-500": outline && primary,
      "text-gray-700": outline && secondary,
      "text-green-500": outline && success,
      "text-orange-400": outline && warning,
      "text-red-600": outline && danger,
    }
  );
  // base class

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
  // for whatever comes inside the opening and closing tab
};

export default Button;
