import { GoGear } from "react-icons/go";

const Header = () => {
  return (
    <div className="bg-orange-300 text-orange-600 flex justify-between items-center py-1">
      <div className="flex">
        <div className="mx-4">Home</div>
        <div className="mx-4">About</div>
      </div>
      <div className="flex mx-4 items-center">
        <GoGear />
      </div>
    </div>
  );
};

export default Header;
