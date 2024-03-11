import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="bg-transparent guardians p-4" id="home">
      <div className="container rounded-lg border-2 border-green-200 mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs md:text-xl lg:text-2xl text-white mb-10 text-center"
        >
          Complete Missions
        </motion.p>
        {/* another */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs md:text-xl lg:text-2xl text-white mb-10 text-center"
        >
          Collect Mission Points
        </motion.p>
        {/* another */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs md:text-xl lg:text-2xl text-white mb-10 text-center"
        >
          Get Rewarded with $fjd
        </motion.p>
        <div className=" flex justify-center items-center ">
          <button className="p-4 px-10 w-full  text-white flex gap-2 bg-white bg-opacity-20 hover:bg-opacity-80">
            <img
              src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=ais"
              alt=""
              className="w-6"
            />
            <p className="therace text-xs md:text-xl lg:text-2xl">Connect X</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
