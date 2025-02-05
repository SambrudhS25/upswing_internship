import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Button } from "antd";
import Breadcrumbs from "./components/Breadcrumbs";
import AppHeader from "./components/Header";
import Home from "./pages/Home";
import SearchUser from "./pages/SearchUser";
import CreateUser from "./pages/CreateUser";
import SettingsPage from "./pages/SettingsPage";
import Sidebar from "./components/Siderbar";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
          <AppHeader />
          <Content style={{ margin: "0 16px" }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Breadcrumbs />
              <Button>
                <Link to="/create-user">Add</Link>
              </Button>
            </div>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: "#fff",
                borderRadius: 8,
              }}
            >
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/search-user" element={<SearchUser />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            CRUD APP with Ant Design
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
