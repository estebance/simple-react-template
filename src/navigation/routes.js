import React from "react";

const Welcome = React.lazy(() => import("../pages/welcome/Welcome"));

const routes = [{ path: "/", exact: true, name: "", component: Welcome }];

export default routes;
