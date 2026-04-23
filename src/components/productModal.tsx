
import { Modal, Text } from "@mantine/core";
import type { Product } from "../types/product";

interface Props {
  opened: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductModal({ opened, onClose, product }: Props) {
  return (
    <Modal opened={opened} onClose={onClose} title="Details">
      {product && (
        <>
          <Text>{product.title}</Text>
          <Text>{product.price}</Text>
        </>
      )}
    </Modal>
  );
}