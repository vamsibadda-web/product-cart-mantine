import { useState } from "react";
import { Container, Grid, TextInput } from "@mantine/core";
import ProductCard from "../components/ProductCard";

function Products() {
    const products = [
  { id: 1, title: "Laptop", price: 50000 },
  { id: 2, title: "Phone", price: 20000 },
  { id: 3, title: "Headphones", price: 2000 },
];
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

return (
    <Container>
      <TextInput
        placeholder="Search..."
        mb="md"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}/>
    <Grid>
        {filtered.map((p) => (
          <Grid.Col span={4} key={p.id}>
            <ProductCard product={p} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
export default Products;