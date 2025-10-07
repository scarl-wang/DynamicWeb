import React from "react";
import { Link, NavLink } from "react-router-dom";
import Panel from "./Panel";

const Navbar = () => {
  /*
    V6+ of React Router changed the way NavLinks work. You used to have access to a var you didn't make called IsActive
    Now we need to write an inline checker function
    Here is how to style NavLink with Tailwind and the new version of React Router and Remix
    */

  //define our base class & our active class as js ver
  const baseClass = "text-blue-500";
  const activeClass =
    "text-blue-500 border-l-4 border-blue-500 font-bold decoration-solid pl-1";

  return (
    <Panel className="sticky top-0 overflow-y-scroll flex flex-col item-start">
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
        Button
      </NavLink>

      <NavLink
        to="/accordion"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Accordion
      </NavLink>

      <NavLink
        to="/dropdown"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Dropdown
      </NavLink>

      <NavLink
        to="/search"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Search
      </NavLink>
    </Panel>
  );
};

/*
LINK COMPONENTS do the job but they're no aware of if they are the active link
const Navbar = () => {
  return (
    <Panel className="sticky top-0 overflow-y-scroll flex flex-col item-start">
      <Link to="/" className="text-blue-500">
        Button
      </Link>

      <Link to="/accordion" className="text-blue-500">
        Accordion
      </Link>

      <Link to="/dropdown" className="text-blue-500">
        Dropdown
      </Link>
    </Panel>
  );
};
*/

export default Navbar;
