import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import StoreContext from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="py-5 flex justify-between items-center">
      <Link to="/">
        <img
          src={assets.logo}
          className="w-36 max-md:w-20 max-lg:w-29"
          alt=""
        />
      </Link>

      {/* Below are the Navigation menus/links */}
      <nav
        className={`flex gap-5 text-primary text-lg ${
          sidebarOpen
            ? "max-sm:w-[65%] max-md:w-[60%] max-md:pl-3"
            : "max-md:w-0 overflow-hidden"
        } max-md:bg-secondary max-md:h-full max-md:min-h-screen max-md:fixed top-0 right-0 max-md:flex-col max-md:pt-20 max-md:text-white transition-all text-center z-10`}
      >
        {/* the close icon for the sidebar */}
        <img
          src={assets.close_icon}
          className="absolute right-11 top-6 w-6 md:hidden"
          onClick={() => setSidebarOpen(false)}
          alt=""
        />
        <NavLink
          to="/"
          onClick={() => setSidebarOpen(false)}
          className={({ isActive }) =>
            isActive && "pb-0.5 border-b-2 border-primary max-md:border-none"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          onClick={() => setSidebarOpen(false)}
          className={({ isActive }) =>
            isActive && "pb-0.5 border-b-2 border-primary max-md:border-none"
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/mobile-app"
          onClick={() => setSidebarOpen(false)}
          className={({ isActive }) =>
            isActive && "pb-0.5 border-b-2 border-primary max-md:border-none"
          }
        >
          Mobile-app
        </NavLink>
        <NavLink
          to="/contact-us"
          onClick={() => setSidebarOpen(false)}
          className={({ isActive }) =>
            isActive && "pb-0.5 border-b-2 border-primary max-md:border-none"
          }
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Right side of navbar */}
      <div className="flex items-center gap-10 max-md:gap-5.5">
        <img src={assets.search_icon} className="w-[22px] max-md:w-5" alt="" />
        <div className="relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              className=":w-[22px] max-md:w-5"
              alt=""
            />
          </Link>

          {/* The dot that displays when a product is added to the cart */}
          <div
            className={`${
              getTotalCartAmount() &&
              "absolute min-w-2.5 min-h-2.5 bg-secondary rounded-full -top-2 -right-2"
            }`}
          />
        </div>
        <button
          className="bg-transparent text-sm text-primary border border-secondary py-2.5 max-md:py-2 px-7.5 max-md:px-7 rounded-4xl cursor-pointer hover:bg-red-100 transition-colors duration-400"
          onClick={() => setShowLogin(true)}
        >
          Sign In
        </button>

        {/* the open hamburger icon for the sidebar */}
        <img
          src={assets.menu_icon}
          className="md:hidden w-8"
          onClick={() => setSidebarOpen(true)}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
