import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";

const SearchBar = (props) => {
  const { onSubmit } = props; // be consistent with the name
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // form submission refresh page and clear inputs
    onSubmit(term);
  };
  return (
    <div>
      {/* Wrapping inputs in a form tag to get default browser behavior
    // this means on Submit is exposed to both a submit button click
    // Or the user hitting the enter key*/}
      <form
        className="flex items-center gap-3 bg-slate-200 py-2 px-4 mb-4 rounded-full"
        onSubmit={handleFormSubmit}
      >
        <div className="flex items-center gap-2 flex-1">
          <FaSearch classname="text-slate-500" />
          <input
            className="flex-1 bg-transparent outline-none text-sm placeholder-slate-500"
            type="text"
            placeholder="Search for images..."
            onChange={handleChange}
            value={term}
          />
        </div>

        <Button text="Search" type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
