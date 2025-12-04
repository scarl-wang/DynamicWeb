import { useDispatch } from "react-redux";
import { reset } from "./store";

import MovieList from "./components/MovieList";
import { FiRefreshCcw } from "react-icons/fi";

import Button from "./components/Button";
import SongList from "./components/SongList";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };
  return (
    <div className="md:container mx-auto rounded bg-slate-100 p-5">
      <div className="p-5">
        <Button primary rounded onClick={handleResetClick}>
          <FiRefreshCcw className="mr-3" />
          Reset All Lists
        </Button>
      </div>
      <MovieList />

      <SongList />
    </div>
  );
}
