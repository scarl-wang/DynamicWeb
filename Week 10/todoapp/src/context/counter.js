import { createContext, useState } from "react";

const CounterContext = createContext();

const Provider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const valuesToShare = { count, handleIncrement, handleDecrement };

  // count is count=count
  // special value prop only ever takes one object,need to be destructured on the other end
  return (
    <CounterContext.Provider value={valuesToShare}>
      {children}
    </CounterContext.Provider>
  );
};

export { Provider };
export default CounterContext;
