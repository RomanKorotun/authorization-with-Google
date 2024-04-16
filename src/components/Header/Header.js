import { Link } from "react-router-dom";
import { HeaderContainer, HeaderStyled } from "./Header.styled";
import { useAuth } from "../../hooks/useAuth";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMunu/UserMenu";
export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Link to="/">Home</Link>
        {!isLoggedIn && <AuthNav />}
        {isLoggedIn && <UserMenu />}
      </HeaderContainer>
    </HeaderStyled>
  );
};
