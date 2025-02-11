import { useContext } from "react";
import { Switch } from "antd";
import { ThemeContext } from "./ThemeProvider";

const SettingsPage = () => {
  const themeContext = useContext(ThemeContext);

  // Ensure themeContext is not undefined
  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <div style={{ padding: 20 }}>
      <h2>Settings</h2>
      <label>Dark Mode:</label>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </div>
  );
};

export default SettingsPage;
