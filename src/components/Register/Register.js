import { useState } from "react";
import {
  ButtonStyled,
  GoogleLink,
  GoogleTextStyled,
  InputStyled,
  LabelStyled,
  RegisterFormStyled,
} from "./Register.styled";
import { useDispatch } from "react-redux";
import { register, registerGoogle } from "../../redux/auth/operations";
import { useSearchParams } from "react-router-dom";
import sprite from "../../images/sprite.svg";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  if (token !== null) {
    dispatch(registerGoogle(token));
  }

  const valuesFields = {
    name,
    email,
    password,
  };
  return (
    <>
      <RegisterFormStyled
        onSubmit={(e) => {
          e.preventDefault();
          valuesFields.name = e.target.elements.name.value;
          valuesFields.email = e.target.elements.email.value;
          valuesFields.password = e.target.elements.password.value;
          e.target.reset();
        }}
      >
        <LabelStyled htmlFor="name">Name</LabelStyled>
        <InputStyled
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <ButtonStyled
          type="submit"
          onClick={() => dispatch(register(valuesFields))}
        >
          Submit
        </ButtonStyled>
        <GoogleTextStyled>Or register through Google</GoogleTextStyled>
        <GoogleLink href="http://localhost:3030/api/auth/google">
          <svg width="32" height="32">
            <use href={`${sprite}#icon-google`}></use>
          </svg>
          Google
        </GoogleLink>
      </RegisterFormStyled>
    </>
  );
};
