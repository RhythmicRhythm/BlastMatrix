import React from "react";
import MatrixRainingCode from "../components/MatrixRainingEffect";
import Navbar from "../components/Navbar";

const Pre = () => {
  return (
    <div className="">
      <MatrixRainingCode className="absolute inset-0" />
      <Navbar />
      <div className="flex justify-center items-center guardians">
        <div className=" p-10 container w-full items-center mt-44">
          <h1 className="text-white text-3xl guardians">
            You're Early Here's a welcome gift
          </h1>
          <h1 className="text-white text-6xl guardians mt-20">+500pts</h1>
          <h1 className="text-white text-sm guardians mt-16">
            Input a refferal code if you have one for extra points
          </h1>

          <form
            className="max-w-4xl mx-auto flex flex-col justify-center items-center text-white"
            action=""
          >
            <div className="text-center mb-6 mt-8 w-full ">
              <input
                type="text"
                name="twitter_username"
                className="bg-white bg-opacity-20 w-full px-6 py-6 border-4 border-gray-600 focus:outline-none
                   focus:border-yellow-500 text-xl rounded-lg placeholder:italic placeholder:text-red-100"
                required
              />
            </div>
            <div className="text-center mb-6 mt-8 w-full ">
              <input
                type="text"
                name="twitter_username"
                placeholder="input wallet address"
                className="bg-white bg-opacity-20 w-full px-6 py-6 border-4 border-gray-600 focus:outline-none
                   focus:border-yellow-500 text-xl rounded-lg guardians placeholder:text-red-100"
                required
              />
            </div>
            <div className="text-center mb-6 mt-8 w-full ">
              <input
                type="text"
                name="twitter_username"
                placeholder="refferal Code ?"
                className="bg-white bg-opacity-20 w-full px-6 py-6 border-4 border-gray-600 focus:outline-none
                   focus:border-yellow-500 text-xl rounded-lg guardians placeholder:text-red-100"
                required
              />
            </div>

            <button className="text-center w-full rounded-md bg-rose-600 px-6 py-4 text-xl sm:text-3xl font-bold text-white hover:bg-rose-400">
              Proceed to Missions 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pre;
