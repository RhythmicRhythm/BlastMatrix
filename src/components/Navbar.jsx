import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    const emailLink = `mailto:mifwebchain@gmail.com?subject=Message from ${name}&body=${message}`;
    window.location.href = emailLink;
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <nav className="flex items-center flex-grow p-4 bg-transparent">
      {/* <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex items-center"
      >
        <h1 className="text-[#00FF00] cursor-pointer guardians hover:text-white text-xl font-bold ml-6">
          Matrix App
        </h1>
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex flex-col md:flex-row lg:flex-row items-center text-2xl justify-center flex-grow"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 hover:text-white mx-4 cursor-pointer"
        >
         <div className="mt-8">
         <h1 className="text-white text-[70px] sm:text-[90px] text-center therace tracking-[10px]">
            Bl<span className="thefire text-[120px] mb-24 text-yellow-500">A</span>st 
          </h1>
          <h1 className="text-white text-[20px] sm:text-[35px] mt-8 text-center nexa tracking-[20px]">
            MATRIX
          </h1>
         </div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;