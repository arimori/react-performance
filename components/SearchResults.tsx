import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }>
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultsProps) {
  // const totalPrice = useMemo(() => {
  //   return results.reduce((total, product) => {
  //     return total + product.price;
  //   }, 0)
  // }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
          />
        );
      })}
    </div>
  );
}

/**
 * What react do in order to update a component?
 * 1. Criar nova versão do componente
 * 2. Comparar coma  versão anterior
 * 3. Se houverem alterações, vai atualizar o que alterou;
 */

/** useMemo(): memorizar um valor
 * 1. Cálculos pesados
 * 2. Igualdade referencial (quando a gente repassa aquela info a um componente filho)
**/

/** useCallback(): memorizar uma função
 * 1.
**/