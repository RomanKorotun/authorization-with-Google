import { Container, SectionUser } from "../components/Layout";
import { UserInfo } from "../components/UserInfo/UserInfo";

const UserPage = () => {
  return (
    <main>
      <SectionUser>
        <Container>
          <UserInfo />
        </Container>
      </SectionUser>
    </main>
  );
};
export default UserPage;
