import React from "react";

const Tasks = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col  gap-20 items-center justify-center">
          <div className="w-full px-6 py-8 therace mb-24  text-white rounded-lg bg-white bg-opacity-20 ">
            <h1 className="text-white text-xl mb-6">Missions</h1>
            <div className="mb-4 flex justify-between bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-6">
              <div className="">
                <h1 className="text-xs">Folow Blast Matrix on X</h1>
              </div>
              <div className="flex flex-col gap-4">
                <div className="">
                  <h1 className="text-xl">500pts</h1>
                </div>
                <div className="">
                  <button className="bg-white text-black text-lg px-6 py-2">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-6 py-8 guardians text-white rounded-lg bg-white bg-opacity-20 ">
            <h1 className="text-white text-xl mb-6">Completed Missions</h1>
            <div className="mb-4 flex-col sm:flex-row flex gap-4 justify-between 
            bg-gradient-to-r from-yellow-400 to-orange-400 px-2 sm:px-8 py-6 text-center">
              <div className="text-center">
                <h1 className="text-xs sm:text-2xl">Folow Blast Matrix on X</h1>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="">
                  <h2 className="">500PTS</h2>
                </div>
                <div className="">
                  <button className="bg-white text-black w-full text-xs sm:text-2xl px-6 py-2">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
