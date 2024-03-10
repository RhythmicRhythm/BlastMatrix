import React from "react";
import Navbar from "../components/Navbar";
import MatrixRainingCode from "../components/MatrixRainingEffect";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen">
      <MatrixRainingCode className="absolute inset-0" />
      <div className="flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
