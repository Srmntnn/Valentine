import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { Divide, Loader } from "lucide-react";
import LoadingSpinner from "./components/LoadingSpinner";
import FrontPage from "./components/FrontPage";
import Envelope from "./components/Envelope";
import Ask from "./components/Ask";
import EndPage from "./components/EndPage";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading("False");
    }, 2000);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            loading === true ? (
              <LoadingSpinner />
            ) : (
              <div id="valentizer" className={`valentizer`}>
                <FrontPage />
              </div>
            )
          }
        ></Route>
        <Route
          path="/envelope"
          element={<Envelope setProgress={setProgress} />}
        ></Route>
        <Route path="/ask" element={<Ask setProgress={setProgress} />}></Route>
        <Route
          path="/endpage"
          element={<EndPage setProgress={setProgress} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
