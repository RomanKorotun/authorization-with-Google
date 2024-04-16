import { Home } from "../components/Home/Home";
import { Container, SectionHome } from "../components/Layout";

const Homepage = () => {
  return (
    <main>
      <SectionHome>
        <Container>
          <Home />
        </Container>
      </SectionHome>
    </main>
  );
};

export default Homepage;
