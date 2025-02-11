import { Layout } from "antd";
import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import Sidebar from "../components/Sider";

const { Content, Footer } = Layout;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
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
