import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const baseClass = "flex items-center transition-colors hover:text-gray-400";
  const activeClass = "border-b-2 border-black";
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-black flex justify-center items-center h-[60px] px-[72px]">
      <div className="flex gap-8">
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          Timer
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          Dashboard
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
