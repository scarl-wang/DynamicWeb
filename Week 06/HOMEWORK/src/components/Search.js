import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="text-6xl text-orange-600 mb-4">Gooooogler</div>
      <div className="bg-orange-200 border border-orange-300 p-2 rounded-full w-80 flex items-center text-orange-400">
        <div className="mx-1">
          <GoSearch />
        </div>
        <input className="flex-1 mx-1 bg-orange-200" />
      </div>
      <div className="mt-4">
        <button className="m-1 rounded-md bg-violet-200 text-violet-600 px-4 py-2">
          Search
        </button>
        <button className="m-1 rounded-md bg-violet-200 text-violet-600 px-4 py-2">
          Image Search
        </button>
      </div>
    </div>
  );
};
export default Search;
