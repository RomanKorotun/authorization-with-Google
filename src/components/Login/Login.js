import { useState } from "react";
import {
  ButtonStyled,
  InputStyled,
  LabelStyled,
  LoginFormStyled,
} from "./Login.styled";

import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { GoogleLink, GoogleTextStyled } from "../Login/Login.styled";
import sprite from "../../images/sprite.svg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const valuesFields = {
    email,
    password,
  };
  return (
    <LoginFormStyled
      onSubmit={(e) => {
        e.preventDefault();
        valuesFields.email = e.target.elements.email.value;
        valuesFields.password = e.target.elements.password.value;
        e.target.reset();
      }}
    >
      <LabelStyled htmlFor="email">Email</LabelStyled>
      <InputStyled
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LabelStyled htmlFor="password">Password</LabelStyled>
      <InputStyled
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ButtonStyled type="submit" onClick={() => dispatch(login(valuesFields))}>
        Submit
      </ButtonStyled>
      <GoogleTextStyled>Have an account? Log in now</GoogleTextStyled>
      <GoogleLink href="http://localhost:3030/api/auth/google">
        <svg width="32" height="32">
          <use href={`${sprite}#icon-google`}></use>
        </svg>
        Google
      </GoogleLink>
    </LoginFormStyled>
  );
};
