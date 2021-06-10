import { List, ListRowRenderer } from "react-virtualized";

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
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