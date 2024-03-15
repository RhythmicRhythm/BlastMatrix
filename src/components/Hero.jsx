import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import CustomButton from "./CustomButton";
import { authentication } from "../firebase-config";
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";

const Hero = () => {
  const SigninTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re.user.reloadUserInfo.displayName);
        console.log(re);
        // storeInSession("user", JSON.stringify(re.user.reloadUserInfo));
        // setUserAuth(re.user.reloadUserInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-transparent guardians p-4" id="home">
      <div className="container w-full rounded-lg mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-6">
        <div className="">
          <button
            onClick={SigninTwitter}
            className="p-4 px-32 rounded-lg text-white flex gap-2 bg-white bg-opacity-20 hover:bg-opacity-80"
          >
            <img
              src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=ais"
              alt=""
              className="w-12"
            />
            <p className="therace text-lg md:text-xl lg:text-6xl">
              Connectvv X
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
