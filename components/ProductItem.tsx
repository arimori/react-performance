import { memo } from 'react';

interface ProcustItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

function ProductItemComponent({ product }: ProcustItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}

// shallow compare -> comparação rasa
// js: {} === {} => false
// igualdade referencial

/** When should use memo?
 * 1. Pure Functional Components: only visual components (same props and same return)
 * 2. Renders too often
 * 3. Re-renders with same props 
 * 4. Components medium to big size
 * */

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  //este componente é igual?
  //retornar condição que satisfaz uma nova renderização
  return Object.is(prevProps.product, nextProps.product);
});