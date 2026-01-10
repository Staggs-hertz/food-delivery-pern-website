import { Link } from "react-router-dom";
import { assets } from "../assets/admin_assets/assets";
import HLine from "./HLine";

const AdminNavbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-2 px-[4%]">
        <Link to="/admin" className="w-[max(10%,80px)]">
          <img src={assets.logo} alt="" />
        </Link>
        <img src={assets.profile_image} alt="" className="w-10" />
      </div>
      <HLine />
    </>
  );
};

export default AdminNavbar;
