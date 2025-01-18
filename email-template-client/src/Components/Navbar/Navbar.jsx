import { Link } from "react-router";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  return (
    <div className="flex justify-start items-end gap-x-4 py-[2%] px-[8%]">
      <p className=" font-bold text-3xl text-slate-700 mr-6">
        <Link to="/">
          Mail<span className="text-orange-500">Canvas</span>
        </Link>
      </p>
      <p className=" text-slate-600 font-semibold hover:text-orange-600">
        <ActiveLink to="/">Home</ActiveLink>
      </p>
      <p className=" text-slate-600 font-semibold hover:text-orange-600">
        <ActiveLink to="templates">Templates</ActiveLink>
      </p>
    </div>
  );
};

export default Navbar;
