import { Container, SectionLogin } from "../components/Layout";
import { Login } from "../components/Login/Login";

const LoginPage = () => {
  return (
    <main>
      <SectionLogin>
        <Container>
          <Login />
        </Container>
      </SectionLogin>
    </main>
  );
};
export default LoginPage;
