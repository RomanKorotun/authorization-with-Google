import { useAuth } from "../../hooks/useAuth";
import { UserInfoStyled } from "./UserInfo.styled";

export const UserInfo = () => {
  const { email } = useAuth();
  return <UserInfoStyled>Hello,&nbsp;{email}</UserInfoStyled>;
};
