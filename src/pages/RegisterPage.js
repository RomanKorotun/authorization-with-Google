import { Container, SectionRegister } from "../components/Layout";
import { Register } from "../components/Register/Register";

const RegisterPage = () => {
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
