import { useLocation } from "react-router-dom";

interface breadcrumbMapProps {
  path: string;
  label: string;
}

type BreadcrumbMap = {
  [key: string]: breadcrumbMapProps[];
};

const useBreadcrumbs = () => {
  const location = useLocation();

  const breadcrumbMap: BreadcrumbMap = {
    "/home": [{ path: "/home", label: "User" }],

    "/create-user": [
      { path: "/home", label: "User" },
      { path: "/create-user", label: "Create User" },
    ],
    "/settings": [{ path: "/settings", label: "Settings" }],
  };

  const pathKeys: breadcrumbMapProps[] = breadcrumbMap[location.pathname] || [
    { path: "/", label: "Home" },
  ];

  return {
    location,
    breadcrumbMap,
    pathKeys,
  };
};

export default useBreadcrumbs;
