import { useLocation } from "react-router-dom";

const useBreadcrumbs = () => {
  const location = useLocation();

  const breadcrumbMap = {
    "/home": [{ path: "/home", label: "User" }],
    "/search-user": [
      { path: "/home", label: "User" },
      { path: "/search-user", label: "Search User" },
    ],
    "/create-user": [
      { path: "/home", label: "User" },
      { path: "/create-user", label: "Create User" },
    ],
    "/settings": [{ path: "/settings", label: "Settings" }],
  };

  const pathKeys = breadcrumbMap[location.pathname] || [
    { path: "/", label: "Home" },
  ];

  return {
    location,
    breadcrumbMap,
    pathKeys,
  };
};

export default useBreadcrumbs;
