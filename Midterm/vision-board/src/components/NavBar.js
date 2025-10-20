import { Link, NavLink } from "react-router-dom";
import cx from "classnames";

const Navbar = () => {
  //defing base class and active class
  const baseClass = "py-2 px-2 text-slate-400 w-24";
  const activeClass =
    "py-2 px-2 text-white bg-black drop-shadow-md rounded-full w-24 content-center";

  return (
    <div className="sticky border bg-white text-center p-4 top-0 flex flex-row items-center justify-center">
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
