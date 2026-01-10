import { useContext, useState } from "react";
import { motion } from "motion/react";
import { assets } from "../assets/assets";
import InputBox from "./InputBox";
import axios from "axios";
import { toast } from "react-toastify";
import StoreContext from "../context/StoreContext";
import AuthContext from "../context/AuthContext";

const LoginPopup = ({ setShowLogin }) => {
  const { url } = useContext(StoreContext);

  //state to change form title and custom button when users want to login or sign up
  const [currState, setCurrState] = useState("Login");

  const { setUser } = useContext(AuthContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (currState) {
        // Login
        const res = await axios.post(
          `${url}/api/user/login`,
          {
            email: data.email,
            password: data.password,
          },
          { withCredentials: true }
        );

        setShowLogin(false);
        setUser(res.data);
        toast.success("Logged in successfully");
      } else {
        // Sign up
        const res = await axios.post(
          `${url}/api/user/register`,
          {
            name: data.name,
            email: data.email,
            password: data.password,
          },
          { withCredentials: true }
        );

        setUser(res.data);
        setShowLogin(false);
        toast.success("Account created successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Authentication failed");
    }
  };

  return (
    <div className="absolute z-30 w-full h-full bg-black/70 grid">
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        onSubmit={handleSubmit}
        className="place-self-center w-[max(23vw,330px)] bg-white flex flex-col gap-6 text-gray-700 py-7 px-7.5 rounded-lg text-sm z-40"
      >
        {/* form title */}
        <div className="flex justify-between items-center text-black">
          <h2 className="text-xl font-bold">
            {currState ? "Login" : "Sign Up"}
          </h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            className="cursor-pointer w-4"
            alt=""
          />
        </div>

        {/* form inputs */}
        <div className="flex flex-col gap-5 *:outline-none">
          {!currState && (
            <InputBox
              type="text"
              name="name"
              placeholder="Your fullname"
              onChange={onChangeHandler}
              value={data.name}
            />
          )}

          <InputBox
            type="email"
            name="email"
            placeholder="Your email"
            onChange={onChangeHandler}
            value={data.email}
          />
          <InputBox
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChangeHandler}
            value={data.password}
          />
        </div>
        <button
          type="submit"
          className="border-none p-2.5 rounded text-white bg-secondary text-[15px] cursor-pointer"
        >
          {!currState ? "Create Account" : "Login"}
        </button>

        {/* log in conditions */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="policy-agreement"
            className="mt-1"
            required
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <p>
          {currState ? "Create a new account. " : "Already have an account. "}

          <span
            className="text-secondary font-medium cursor-pointer"
            onClick={() => setCurrState((prev) => !prev)}
          >
            {currState ? "Click here" : "Login here"}
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default LoginPopup;
