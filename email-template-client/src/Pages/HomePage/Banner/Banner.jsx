import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="bg-slate-100 py-[5%] mx-[10%] rounded-3xl">
      <div className="w-1/2 mx-auto">
        <p className="font-bold text-5xl text-slate-700 text-center leading-tight">
          Seamless{" "}
          <span className="text-orange-600">Email Template Design</span> for
          Everyone
        </p>
        <p className="text-gray-600 text-center mt-6">
          Design stunning, professional email templates effortlessly. Customize
          layouts, fonts, and visuals to match your brand and captivate your
          audience. Perfect for businesses and individuals alike.
        </p>
        <div className="flex justify-center items-center mt-6">
          <Link to="/templates">
            <button className="bg-orange-500 text-white font-semibold hover:bg-orange-600 px-5 py-[10px] rounded-sm">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
