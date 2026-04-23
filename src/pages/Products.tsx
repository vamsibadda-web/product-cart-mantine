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
  const [category, setCategory] = useState<string | null>(null);
  const [multi, setMulti] = useState<string[]>([]);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (
      search &&
      !p.title.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }
    if (category && p.category !== category) {
      return false;
    }
    if (multi.length > 0 && !multi.includes(p.category)) {
      return false;
    }

    return true;
  });

  return (
    <>
          <Navbar />
      <Container>
        <Group mb="md">
          <TextInput
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}/>
          <Select
            data={CATEGORY_OPTIONS}
            placeholder="Category"
            value={category}
            onChange={setCategory} />
          <MultiSelect
            data={CATEGORY_OPTIONS}
            placeholder="Multi Category"
            value={multi}
            onChange={setMulti}/>
          <Button onClick={() => setOpened(true)}>Filter</Button>
        </Group>
        <Tabs defaultValue="grid">
          <Tabs.List>
            <Tabs.Tab value="grid">Grid</Tabs.Tab>
            <Tabs.Tab value="table">Table</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="grid">
            <Grid>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p) => (
                  <Grid.Col span={4} key={p.id}>
                    <ProductCard
                      product={p}
                      onView={(prod) => setSelected(prod)}/>
                  </Grid.Col>
                ))
              ) : (
                <p>No products found</p>
              )}
            </Grid>
          </Tabs.Panel>
          <Tabs.Panel value="table">
            <ProductTable data={filteredProducts} />
          </Tabs.Panel>
        </Tabs>
        <ProductModal
          opened={!!selected}
          onClose={() => setSelected(null)}
          product={selected}/>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Filters"
        >
          <p>filters here</p>
        </Drawer>
      </Container>
    </>
  );
}
export default Products;