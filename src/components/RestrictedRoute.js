import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const RestrictedRoute = ({ redirectTo, page }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? page : <Navigate to={redirectTo} />;
};
