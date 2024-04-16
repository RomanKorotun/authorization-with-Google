import { AuthCardStyled, NavLinkStyled } from "./AuthNav.styled";
export const AuthNav = () => {
  return (
    <AuthCardStyled>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Login</NavLinkStyled>
    </AuthCardStyled>
  );
};
