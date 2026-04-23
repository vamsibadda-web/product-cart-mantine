
import { Card, Text, Button, Stack } from "@mantine/core";
import type { Product } from "../types/product";

interface Props {
  product: Product;
  onView: (p: Product) => void;
}

 function ProductCard({ product, onView }: Props) {
  return (
    <Card shadow="sm" radius="md" p="lg">
      <Stack>
        <Text fw={500}>{product.title}</Text>
        <Text>₹{product.price}</Text>

        <Button color="blue" size="sm" onClick={() => onView(product)}>
          View
        </Button>
      </Stack>
    </Card>
  );
}
export default ProductCard;