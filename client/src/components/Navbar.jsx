import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // const [menu, setMenu] useState("home");
  return (
    <div className="p-5 flex justify-between items-center">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>
      <nav className="flex gap-5 text-primary text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive && "pb-0.5 border-b-2 border-primary"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive && "pb-0.5 border-b-2 border-primary"
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/mobile-app"
          className={({ isActive }) =>
            isActive && "pb-0.5 border-b-2 border-primary"
          }
        >
          Mobile-app
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive && "pb-0.5 border-b-2 border-primary"
          }
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Right side of navbar */}
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <img src={assets.basket_icon} alt="" />

          {/* The dot that displays when a product is added to the cart */}
          <div className="absolute min-w-2.5 min-h-2.5 bg-secondary rounded-full -top-2 -right-2" />
        </div>
        <button className="bg-transparent text-sm text-primary border border-secondary py-2.5 px-7.5 rounded-4xl cursor-pointer hover:bg-red-100 transition-colors duration-400">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
