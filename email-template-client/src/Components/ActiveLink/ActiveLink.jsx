/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./ActiveLink.css"; // Custom CSS for animation

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "active-link text-orange-600 font-semibold"
          : "inactive-link text-slate-600 font-semibold"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
