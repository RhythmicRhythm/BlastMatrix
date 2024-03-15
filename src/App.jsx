import { useContext, useEffect, useState } from "react";
import { lookInSession } from "./common/session";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pre from "./pages/Pre";
import Application from "./pages/Application";
import Loader from "./components/Loader";

export const UserContext = createContext({});

function App() {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    let userInSession = lookInSession("user");

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ displayName: null });
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pre" element={<Pre />} />
        <Route path="application" element={<Application />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
