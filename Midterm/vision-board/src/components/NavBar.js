import { Link, NavLink } from "react-router-dom";
import cx from "classnames";

const Navbar = () => {
  /*
    V6+ of React Router changed the way NavLinks work. You used to have access to a var you didn't make called IsActive
    Now we need to write an inline checker function
    Here is how to style NavLink with Tailwind and the new version of React Router and Remix
    */

  //define our base class & our active class as js ver
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
          //now we have isActive destructured out of our props we get
          //use a ternary to apply base or active class
          //conditionToCheck ? return this is true : else do this

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
