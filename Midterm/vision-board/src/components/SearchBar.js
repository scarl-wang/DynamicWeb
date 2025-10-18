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
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleChange} value={term} />
      </form>
    </div>
  );
};

export default SearchBar;
