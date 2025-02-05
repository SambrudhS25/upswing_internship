import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchUser from "./pages/SearchUser";
import CreateUser from "./pages/CreateUser";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home></Home>} /> 
        <Route path="/search-user" element={<SearchUser />} />
        <Route path="/create-user" element={<CreateUser />} />
        
      </Routes>
    </Router>
  );
};

export default App;
