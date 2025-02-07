import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import CreateUser from "../pages/CreateUser";
import SettingsPage from "../pages/SettingsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

export default AppRouter;
