import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: gold;
  border-bottom: 1px solid black;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 320px;
  max-width: 428px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1158px) {
    max-width: 1158px;
  }
`;
