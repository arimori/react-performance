import { memo, useState } from 'react';
import dynamic from 'next/dynamic';

import { AddProductToWishListProps } from './AddProductToWishlist';

const AddProductToWishlist = dynamic<AddProductToWishListProps>(() => {
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist);
}, {
  loading: () => <span>Carregando...</span>
});

interface ProcustItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProcustItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  /** example: Function loaded as dynamic
  async function showFormattedDate() {
    const { format } = await import('date-fns')

    format();
  }
  **/

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => setIsAddingToWishList(true)} >Adicionar aos favoritos </button>

      {isAddingToWishList && (
        <AddProductToWishlist
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}

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