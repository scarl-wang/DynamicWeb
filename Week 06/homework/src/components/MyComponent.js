import cx from "classnames";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const MyComponent = (props) => {
  const { children, large } = props;

  const largeStyles = large ? "text-3xl rounded-full" : "text-base rounded-md";
  // conditional styles

  return (
    <button
      className={`bg-blue-200 border-2 border-blue-700 text-blue-700 px-10 py-2 m-4 ${largeStyles}`}
    >
      {children}
    </button>
  );
};

export default MyComponent;
