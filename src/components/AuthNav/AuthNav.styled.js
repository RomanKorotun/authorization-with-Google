import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const AuthCardStyled = styled.div`
  display: flex;
  gap: 15px;
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: black;
  }
`;
