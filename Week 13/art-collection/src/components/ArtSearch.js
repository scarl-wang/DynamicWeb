import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const ArtSearch = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => {
    return state.art.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="py-8">
      <div className="flex flex-row justify-between">
        <h3 className="text-xl">My Art Collection</h3>
        <div>
          <label>Search: </label>
          <input
            className="border border-2 rounded border-slate-300"
            onChange={handleSearchTermChange}
            value={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtSearch;
