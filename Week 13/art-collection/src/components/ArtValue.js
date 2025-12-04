import { useSelector } from "react-redux";

const ArtValue = () => {
  const totalPrice = useSelector(({ art: { data, searchTerm } }) => {
    return (
      data
        // first filter to match what's visible on the screen
        .filter((art) => {
          return art.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        // hen add up all our art.prices of visible art
        .reduce((acc, art) => (acc += art.price), 0)
    );
  });

  return (
    <div className="p-2 flex flex-row justify-end">
      <h3 className="tex=lg">Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default ArtValue;
