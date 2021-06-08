import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} />
        );
      })}
    </div>
  );
}

/**
 * 1. Criar nova versão do componente
 * 2. Comparar coma  versão anterior
 * 3. Se houverem alterações, vai atualizar o que alterou;
 */