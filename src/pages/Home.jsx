import { useContext, useEffect, useState } from "react";


import Navbar from "../components/Navbar";
import MatrixRainingCode from "../components/MatrixRainingEffect";
import Hero from "../components/Hero";
import Loader from "../components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden overflow-y-hidden">
      <MatrixRainingCode className="absolute inset-0" />
      <div className="flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
