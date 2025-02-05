import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { UserOutlined, FileOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,Button, Flex } from 'antd';
import Home from './pages/Home';
import SearchUser from './pages/SearchUser';
import CreateUser from './pages/CreateUser';

const { Header, Content, Footer, Sider } = Layout;

// Dummy pages for routing
const SettingsPage = () => <div>Settings Page</div>;

// Breadcrumb Component
const DynamicBreadcrumb = () => {
  const location = useLocation();

  // Mapping pathname to readable labels
  const breadcrumbMap = {
    "/home": ["User"],
    "/search-user": ["User", "Search User"],
    "/create-user": ["User", "Create User"],
    "/settings": ["Settings"]
  };

  const pathKeys = breadcrumbMap[location.pathname] || ["Home"];

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {pathKeys.map((key, index) => (
        <Breadcrumb.Item key={index}>{key}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/home">User</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              <Link to="/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '0 16px' }}>
            {/* Dynamic Breadcrumb */}
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
            <DynamicBreadcrumb />
            <Button><Link to='/create-user'>Add</Link></Button>
            </div>
            
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/search-user" element={<SearchUser />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
