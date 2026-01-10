import { NavLink } from "react-router-dom";
import { assets } from "../assets/admin_assets/assets";

const AdminSidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-2 border-t-0 border-[#a9a9a9] -mt-2.5 text-[max(1vw,10px)]">
      <div className="pt-12.5 pl-[20%] flex flex-col gap-5 *:flex *:items-center *:gap-3 *:border *:border-gray-300 *:border-r-0 *:py-2 *:px-2.5 *:rounded-l-sm *:cursor-pointer">
        <NavLink
          to="/admin/add"
          className={({ isActive }) =>
            isActive && "bg-secondary/20 border-secondary"
          }
        >
          <img src={assets.add_icon} alt="" />
          <p className="max-sm:hidden">Add Items</p>
        </NavLink>
        <NavLink
          to="/admin/list"
          className={({ isActive }) =>
            isActive && "bg-secondary/20 border-secondary"
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="max-sm:hidden">List Items</p>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive && "bg-secondary/20 border-secondary"
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="max-sm:hidden">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
