import { Card, Text, Button } from "@mantine/core";

function ProductCard({ product }: any) {
  return (
    <Card shadow="sm" padding="lg">
      <Text fw={500}>{product.title}</Text>
      <Text size="sm">₹{product.price}</Text>
      <Button mt="sm">View</Button>
    </Card>
  );
}
export default ProductCard;