import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchUser from "./pages/SearchUser";
import CreateUser from "./pages/CreateUser";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/search-user" element={<SearchUser />} />
        <Route path="/create-user" element={<CreateUser />} />
        {/*<Route path="/update-user" element={<UpdateUser />} />
        <Route path="/delete-user" element={<DeleteUser />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
