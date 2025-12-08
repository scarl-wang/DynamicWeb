import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const baseClass =
    "flex justify-center px-4 py-2 w-[120px] border border-stone-900 transition-colors hover:bg-stone-100";
  const activeClass =
    "flex justify-center px-4 py-2 w-[120px] border border-stone-900 bg-stone-900 text-white";
  return (
    <div className="sticky top-0 bg-stone-100 z-50 flex justify-center items-center h-[60px] px-[72px]">
      <div className="flex">
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
