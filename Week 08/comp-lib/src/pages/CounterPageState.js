import Button from "../components/Button";
import Panel from "../components/Panel";

import { useState } from "react";

const CounterPage = ({ initialCount }) => {
  // same as const {initialCount} = props
  const [count, setCount] = useState(initialCount);
  // you can use prop value for the initial value
  const [valueToAdd, setValueToAdd] = useState(0);

  const handleIncrement = () => {
    //setCount((prev) => prev + 1);
    setCount(count + 1);
    // No count = count + 1 because you cannot directly mutate state
    // REACT won't register the change
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value || 0);
    // or parseFloat for decimals
    // this makes it an integer rather than a string
    setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // make sure the form submission doesn't trigger automatic reload,
    // which is typical browser behavior
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className="m-4">
      <h1 className="text-xl mb-4">Count is currently: {count}</h1>

      <div className="flex flex-row">
        <Button success outline rounded onClick={handleIncrement}>
          Increment
        </Button>
        <Button danger outline rounded onClick={handleDecrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a custom amount to the counter</label>
        <input
          type="number"
          onChange={handleChange}
          value={valueToAdd || ""}
          className="p-1 m-4 bg-slate-50 border border-slate-300"
        />
        <Button primary outline rounded>
          Add Custom Amount
        </Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
