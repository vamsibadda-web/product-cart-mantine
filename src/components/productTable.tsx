
import { Table } from "@mantine/core";
import type { Product } from "../types/product";

export default function ProductTable({ data }: { data: Product[] }) {
  return (
    <Table striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Title</Table.Th>
          <Table.Th>Price</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {data.map((p) => (
          <Table.Tr key={p.id}>
            <Table.Td>{p.title}</Table.Td>
            <Table.Td>{p.price}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}