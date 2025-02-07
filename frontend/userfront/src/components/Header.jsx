import { Layout } from "antd";
import Breadcrumbs from "./Breadcrumbs";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
      <Breadcrumbs />
    </Header>
  );
};

export default AppHeader;
