import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import CustomButton from "./CustomButton";
import { authentication } from "../firebase-config";
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  let {
    userAuth: { screenName },
    setUserAuth,
  } = useContext(UserContext);

  const SigninTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re.user.reloadUserInfo.displayName);
        console.log(re);
        storeInSession("user", JSON.stringify(re.user.reloadUserInfo));
        setUserAuth(re.user.reloadUserInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-transparent guardians p-4" id="home">
      <div className="flex justify-center items-center guardians">
        <div className="container w-full items-center mt-44">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-white">
            <button className="text-center flex items-center gap-4 rounded-md bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-4 text-xl sm:text-4xl font-bold text-white hover:bg-rose-400">
              <div className="">
                <img
                  className="w-8 sm:w-12 h-8 sm:h-12 rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBIrgiE10HsVt-49R1JjHsZ084dLUEym7ZkDHZVPHnw&s"
                  alt=""
                />
              </div>
              <p className="">Connect x</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
