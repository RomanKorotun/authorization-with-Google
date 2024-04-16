import styled from "styled-components";

export const LoginFormStyled = styled.form`
  border-radius: 8px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 350px;
  padding: 15px;
`;

export const InputStyled = styled.input`
  margin-bottom: 16px;
`;

export const LabelStyled = styled.label`
  margin-bottom: 5px;
  color: white;
`;

export const ButtonStyled = styled.button`
  align-self: center;
  margin-bottom: 16px;
  border-radius: 5px;
  transition: background-color 250ms;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 25px;
  padding-right: 25px;
  border: none;
  transition: background-color 250ms;
  &:hover,
  :focus {
    background-color: #dcdcdc;
  }
`;

export const GoogleTextStyled = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 16px;
`;

export const GoogleLink = styled.a`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  transition: background-color 250ms;
  &:hover,
  :focus {
    background-color: #dcdcdc;
  }
`;
