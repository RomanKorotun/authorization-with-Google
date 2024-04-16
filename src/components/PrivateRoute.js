import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
export const PrivateRoute = ({ redirectTo, page }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? page : <Navigate to={redirectTo} />;
};
