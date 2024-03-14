import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pre from "./pages/Pre";
import Application from "./pages/Application";
import Loader from "./components/Loader";


function App() {
 

  return (
   
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pre" element={<Pre />} />
        <Route path="application" element={<Application />} />
     
      </Routes>
   
  );
}

export default App;
