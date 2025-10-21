// creating a reusable button with styling and hover state

const Button = (props) => {
  const { text, onClick, type = "button", className = "" } = props;

  const defaultStyles =
    "px-4 py-2 text-sm bg-black text-white rounded-full hover:bg-rose-600 transition-colors whitespace-nowrap";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${defaultStyles} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
