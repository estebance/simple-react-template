import React from "react";

const Welcome = React.lazy(() => import("../pages/welcome/Welcome"));

const routes = [{ path: "/", exact: true, name: "", element: Welcome }];

export default routes;
