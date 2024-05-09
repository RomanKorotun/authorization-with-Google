import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout.js";
import { lazy, useEffect } from "react";
import { RestrictedRoute } from "./RestrictedRoute.js";
import { PrivateRoute } from "./PrivateRoute.js";
import { useDispatch } from "react-redux";
import { refresh } from "../redux/auth/operations.js";
import { useAuth } from "../hooks/useAuth.js";

const HomePage = lazy(() => import("../pages/Homepage.js"));
const RegisterPage = lazy(() => import("../pages/RegisterPage.js"));
const UserPage = lazy(() => import("../pages/UserPage.js"));
const LoginPage = lazy(() => import("../pages/LoginPage.js"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
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
