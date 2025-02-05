import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const breadcrumbMap = {
    "/home": ["User"],
    "/search-user": ["User", "Search User"],
    "/create-user": ["User", "Create User"],
    "/settings": ["Settings"],
  };

  const pathKeys = breadcrumbMap[location.pathname] || ["Home"];

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {pathKeys.map((key, index) => (
        <Breadcrumb.Item key={index}>{key}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
