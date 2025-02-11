import { Layout } from "antd";
import Breadcrumbs from "./Breadcrumbs";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header
      style={{
        padding: 0,
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "20px",
      }}
    >
      <Breadcrumbs />
    </Header>
  );
};

export default AppHeader;
