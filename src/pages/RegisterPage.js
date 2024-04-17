import { useDispatch } from "react-redux";
import { Container, SectionRegister } from "../components/Layout";
import { Register } from "../components/Register/Register";
import { useSearchParams } from "react-router-dom";
import { registerGoogle } from "../redux/auth/operations";
import { useEffect } from "react";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token !== null) {
      dispatch(registerGoogle(token));
    }
  }, [dispatch, token]);

  return (
    <main>
      <SectionRegister>
        <Container>
          <Register />
        </Container>
      </SectionRegister>
    </main>
  );
};

export default RegisterPage;
