import { useReducer } from "react";
import { produce } from "immer";
import Panel from "../components/Panel";
import Button from "../components/Button";

// community convention is to name all of your action types as constants

const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";
const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_VALUE_TO_ADD:
      // with immer produce in place, we can tell produce layer only what we want to change
      // and we can write it as a direct mutation
      state.valueToAdd = action.payload;
      // you don't have to return an entire copy of state
      // but you do have to return at the end of each state
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    default:
      return;
  }
};

const CounterImmerPage = ({ initialCount }) => {
  // when you wrap your reducer/pass it through the produce function when calling useReducer,
  // you now have the ability to directly mutate state inside your reduce
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const handleIncrement = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

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

export default CounterImmerPage;
