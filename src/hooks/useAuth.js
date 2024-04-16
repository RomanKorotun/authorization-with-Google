import { useSelector } from "react-redux";
import {
  selectUserName,
  selectIsLoggedIn,
  selectError,
  selectUserEmail,
  selectIsRefreshing,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const user = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const email = useSelector(selectUserEmail);
  const isRefreshing = useSelector(selectIsRefreshing);
  return {
    user,
    isLoggedIn,
    error,
    email,
    isRefreshing,
  };
};
