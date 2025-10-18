import { useState } from "react";

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
      {/* By wrapping our inputs in a form tag, we get default browser behavior
    // this means on Submit is exposed to both a submit button click
    // Or the user hitting the enter key*/}
      <form
        className="grid grid-cols-3 justify-items-stretch bg-slate-200 py-2 pl-1 pr-2 rounded-full"
        onSubmit={handleFormSubmit}
      >
        <input
          className="text-xs col-span-2 bg-slate-200 rounded-full px-2"
          type="text"
          placeholder="Search for images..."
          onChange={handleChange}
          value={term}
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm min-w-20 max-w-24 justify-self-end bg-black text-white rounded-full hover:bg-slate-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
