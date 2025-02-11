import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, FileOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/home">User</Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<FileOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
