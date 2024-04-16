import { useDispatch } from "react-redux";
import { ButtonStyled, UserMenuCardStyled } from "./UserMenu.styled";
import { Link } from "react-router-dom";
import { logout } from "../../redux/auth/operations";
export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <UserMenuCardStyled>
      <Link to="/profile">Profile</Link>
      <ButtonStyled
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </ButtonStyled>
    </UserMenuCardStyled>
  );
};
