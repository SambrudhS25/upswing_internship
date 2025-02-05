import { Layout, Button } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ padding: 0, background: "#fff" }}>
      {/* You can add user profile, notifications, etc. here */}
    </Header>
  );
};

export default AppHeader;
