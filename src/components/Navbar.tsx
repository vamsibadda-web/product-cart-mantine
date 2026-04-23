import { Group, Button, Container, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
      <Container h="100%">
        <Group justify="space-between" h="100%" align="center">
          
          <Title
            order={2}
            c="white"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}>
            Welcome to Demo Products
          </Title>
         <Group>
            <Button variant="white" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button variant="white" onClick={() => navigate("/products")}>
              Products
            </Button>
          </Group>

        </Group>
      </Container>
  );
}
export default Navbar;