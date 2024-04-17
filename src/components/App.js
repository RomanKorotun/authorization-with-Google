import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout.js";
import { lazy, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute.js";
import { PrivateRoute } from "./PrivateRoute.js";
import { useDispatch } from "react-redux";
import { refresh } from "../redux/auth/operations.js";
import { useAuth } from "../hooks/useAuth.js";
import { registerGoogle } from "../redux/auth/operations.js";
const HomePage = lazy(() => import("../pages/Homepage.js"));
const RegisterPage = lazy(() => import("../pages/RegisterPage.js"));
const UserPage = lazy(() => import("../pages/UserPage.js"));
const LoginPage = lazy(() => import("../pages/LoginPage.js"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // const [searchParams, setSearchParams] = useSearchParams();

  // const token = searchParams.get("token");

  useEffect(() => {
    dispatch(refresh());
    // if (token !== null) {
    //   dispatch(registerGoogle(token));
    // }
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refresh user...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute page={<RegisterPage />} redirectTo="/profile" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute page={<LoginPage />} redirectTo="/profile" />
          }
        />
        <Route
          path="profile"
          element={<PrivateRoute page={<UserPage />} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
};

export default App;
