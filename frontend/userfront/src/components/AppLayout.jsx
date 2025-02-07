import { Layout } from "antd";
import AppHeader from "./Header";
import Sidebar from "../components/Siderbar";

const { Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <AppHeader />
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          CRUD APP with Ant Design
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
