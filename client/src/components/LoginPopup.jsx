import { useState } from "react";
import { motion } from "motion/react";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  //state to change form title and custom button when users want to login or sign up
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="absolute z-30 w-full h-full bg-black/70 grid">
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="place-self-center w-[max(23vw,330px)] bg-white flex flex-col gap-6 text-gray-700 py-7 px-7.5 rounded-lg text-sm z-40"
      >
        {/* form title */}
        <div className="flex justify-between items-center text-black">
          <h2 className="text-xl font-bold">{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            className="cursor-pointer w-4"
            alt=""
          />
        </div>

        {/* form inputs */}
        <div className="flex flex-col gap-5 *:outline-none *:border *:border-[#c9c9c9] *:p-2.5 *:rounded">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="fullname"
              placeholder="Your fullname"
              id=""
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Your email"
            id=""
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id=""
            required
          />
        </div>
        <button className="border-none p-2.5 rounded text-white bg-secondary text-[15px] cursor-pointer">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* log in conditions */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="policy-agreement"
            id=""
            className="mt-1"
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className="text-secondary font-medium cursor-pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="text-secondary font-medium cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default LoginPopup;
