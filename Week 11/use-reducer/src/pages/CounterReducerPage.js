import { useReducer } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";

// community convention is to name all of your action types as constants

const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";
const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";

const reducer = (state, action) => {
  // chained conditionals are valid, but they are all conditions based on the same value (action.type)
  // if (action.type === "set-value-to-add") {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //   };
  // }
  // use a switch, based on action.type
  switch (action.type) {
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      // this is how we make sure we always return at least a copy of existing state
      return state;
  }

  // our reducer always has to return a copy of the full state object,
  // if we don't return something, it will be lost forever
  // return state;
};

const CounterReducerPage = ({ initialCount }) => {
  // const {initialCount} = props
  // create a piece of state var called count and its setter function
  // this time we are recieving a prop from the parent and setting it as the initial count
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const handleIncrement = () => {
    // setCount((currentCount) => currentCount + 1)
    // BAD NEVER EVER count = count + 1 (except in the next refactor with Immer ;)
    // setCount(count + 1);
    dispatch({ type: INCREMENT_COUNT });
  };

  const handleDecrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add user input number to count
    // setCount(count + valueToAdd);
    // reset valueToAdd
    // setValueToAdd(0);

    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // console.log(value, typeof value)
    // setValueToAdd
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };
  return (
    <Panel>
      <h1>Count is currently {state.count}</h1>
      <div className="flex flex-row">
        <Button success rounded onClick={handleIncrement} className="mr-4">
          Increment
        </Button>
        <Button danger rounded onClick={handleDecrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="p-1 m-4 bg-slate-50 border border-slate-300"
          type="number"
          onChange={handleChange}
          value={state.valueToAdd || ""}
        />
        <Button primary rounded>
          Add Custom Amount!
        </Button>
      </form>
    </Panel>
  );
};

export default CounterReducerPage;
