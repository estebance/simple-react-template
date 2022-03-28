import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import * as actions from "../store/actions";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
// const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

const Navigator = () => {
  const loadingTemplate = () => (
    <div className="animated fadeIn pt-1 text-center">
      <h1>Loading profile...</h1>
    </div>
  );
  // const { loading } = useSelector((state) => state.userAction);
  // const dispatch = useDispatch();

  useEffect(() => {
    console.log('init hook')
  }, []);

  const nonAuthroutes = (
    <Routes>
      <Route
        path="*"
        name="Home"
        element={<DefaultLayout />}
      />
    </Routes>
  );

  /* 
  const authRoutes = (
    <Routes>
      <Route
        path="/"
        name="Home"
        render={(props) => (
          <AuthLayout
            {...props}
        }/>
        )}
      />
    </Routes>
  );
  */ 

  return (
    <React.Suspense fallback={loadingTemplate()}>
      <BrowserRouter>
        {nonAuthroutes}
      </BrowserRouter>
    </React.Suspense>
  );
};

export default Navigator;

