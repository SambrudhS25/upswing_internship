import { useContext } from "react";
import { Switch } from "antd";
import { ThemeContext } from "./ThemeProvide";

const SettingsPage = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: 20 }}>
      <h2>Settings</h2>
      <label>Dark Mode:</label>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </div>
  );
};

export default SettingsPage;
