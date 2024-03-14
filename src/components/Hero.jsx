import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="bg-transparent guardians p-4" id="home">
      <div className="container w-full rounded-lg mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-6">
     
        <div className="">
          <button className="p-4 px-32 rounded-lg text-white flex gap-2 bg-white bg-opacity-20 hover:bg-opacity-80">
            <img
              src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=ais"
              alt=""
              className="w-12"
            />
            <p className="therace text-lg md:text-xl lg:text-6xl">Connect X</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
