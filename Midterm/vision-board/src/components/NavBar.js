import { Link, NavLink } from "react-router-dom";
import cx from "classnames";

const Navbar = () => {
  //defing base class and active class
  const baseClass = "py-2 px-2 text-slate-400 w-24";
  const activeClass =
    "py-2 px-2 text-white bg-black drop-shadow-md rounded-full w-24 content-center";

  // z-index controlls stack order https://v3.tailwindcss.com/docs/z-index
  return (
    <div className="sticky bg-white text-center p-4 top-0 flex flex-row items-center justify-center z-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          // isActive is a prop we get for free from NavLink
          //({isActive}) => {} is like  (props) => {const {isActive}} =

          isActive ? activeClass : baseClass
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Favorites
      </NavLink>
    </div>
  );
};

export default Navbar;
