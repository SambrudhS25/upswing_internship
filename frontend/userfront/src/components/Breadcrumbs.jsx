import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import useBreadcrumbs from "../hooks/useBreadcrumbs";

const Breadcrumbs = () => {
  const { pathKeys } = useBreadcrumbs();

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {pathKeys.map((item, index) => (
        <Breadcrumb.Item key={index}>
          <Link to={item.path} style={{ color: "red" }}>
            {item.label}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
