import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState();
  // const initialState = useSelector((store) => store);
  // console.log(initialState);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
