
import { useState } from "react";
import {Container,Grid,TextInput,Select,MultiSelect,Group,Tabs,Drawer,Button} from "@mantine/core";
import Navbar from "../components/Navbar";
import ProductCard from "../components/productCart";
import ProductModal from "../components/productModal";
import ProductTable from "../components/productTable";

import { PRODUCTS } from "../data/products";
import { CATEGORY_OPTIONS } from "../constants/productConstants";
import type { Product } from "../types/product";
function Products() {
  const [search, setSearch] = useState("");
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <Container>
        <Group mb="md">
          <TextInput
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}/>

          <Select data={CATEGORY_OPTIONS} placeholder="Category" />
          <MultiSelect data={CATEGORY_OPTIONS} placeholder="Multi" />

          <Button onClick={() => setOpened(true)}>Filter</Button>
        </Group>
        <Tabs defaultValue="grid">
          <Tabs.List>
            <Tabs.Tab value="grid">Grid</Tabs.Tab>
            <Tabs.Tab value="table">Table</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="grid">
            <Grid>
              {filtered.map((p) => (
                <Grid.Col span={4} key={p.id}>
                  <ProductCard
                    product={p}
                    onView={(prod) => setSelected(prod)}/>
                </Grid.Col>
              ))}
            </Grid>
          </Tabs.Panel>

          <Tabs.Panel value="table">
            <ProductTable data={filtered} />
          </Tabs.Panel>
        </Tabs>

        <ProductModal
          opened={!!selected}
          onClose={() => setSelected(null)}
          product={selected}/>

        <Drawer opened={opened} onClose={() => setOpened(false)}>
          Filters here
        </Drawer>
      </Container>
    </>
  );
}
export default Products;