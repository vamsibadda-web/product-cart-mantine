import { Button, Container, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
    return (
    <Container>
      <Title>Welcome</Title>
      <Button mt="md" onClick={() => navigate("/products")}>
        Go to Products
      </Button>
    </Container>
  );
}
export default Home;