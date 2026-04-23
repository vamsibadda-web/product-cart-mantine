import { Container, Title } from "@mantine/core";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Welcome</Title>
      </Container>
    </>
  );
}
export default Home;