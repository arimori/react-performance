interface ProcustItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

export function ProductItem({ product }: ProcustItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}