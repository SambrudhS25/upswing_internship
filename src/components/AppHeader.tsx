import { Layout } from "antd";
import Breadcrumbs from "./Breadcrumbs";

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header>
      <Breadcrumbs />
    </Header>
  );
};

export default AppHeader;
