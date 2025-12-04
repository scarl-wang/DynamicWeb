import { useDispatch, useSelector } from "react-redux";
import { changeName, changePrice, addArt } from "../store";

const ArtForm = () => {
  const dispatch = useDispatch();
  // destructure out the name and cost being returned from our selector function
  const { name, price } = useSelector((state) => {
    return {
      name: state.form.name,
      price: state.form.price,
    };
  });
  const handleNameChange = (event) => {
    // event.target.value
    dispatch(changeName(event.target.value));
  };

  const handlePriceChange = (event) => {
    // event.target.value is going to come in as a string not number
    // the NaN check is fixed with || 0
    const artPrice = parseInt(event.target.value) || 0;
    dispatch(changePrice(artPrice));
  };

  const handleSubmit = (event) => {
    // we don't want a page reload
    event.preventDefault();
    // we need to dispatch name & price in our payload {}
    dispatch(addArt({ name, price }));
  };

  return (
    <div className="my-5">
      <h3 className="text-xl">Add New Artwork</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              className="border border-2 rounded border-slate-300"
              type="text"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div className="flex flex-col ml-3">
            <label>Price</label>
            <input
              className="border border-2 rounded border-slate-300"
              type="number"
              onChange={handlePriceChange}
              value={price || ""}
            />
          </div>
          <div className="flex flex-col justify-end ml-3">
            <button className="px-3 py-1 rounded bg-slate-500 text-white">
              Add To Collection
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ArtForm;
