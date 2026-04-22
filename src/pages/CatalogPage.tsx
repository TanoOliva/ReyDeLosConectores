import { FiltersPanel } from '../components/FiltersPanel'
import { ProductCard } from '../components/ProductCard'
import { SearchBar } from '../components/SearchBar'
import type { CatalogFilters, Product } from '../types/product'

interface CatalogPageProps {
  products: Product[]
  searchTerm: string
  filters: CatalogFilters
  categories: string[]
  connectorTypes: string[]
  brands: string[]
  onSearch: (term: string) => void
  onChangeFilters: (filters: CatalogFilters) => void
  onViewDetail: (productId: string) => void
  onAddToCart: (productId: string) => void
}

export function CatalogPage({
  products,
  searchTerm,
  filters,
  categories,
  connectorTypes,
  brands,
  onSearch,
  onChangeFilters,
  onViewDetail,
  onAddToCart,
}: CatalogPageProps) {
  return (
    <>
      <section>
        <h1>Catálogo de conectores</h1>
        <p>Filtra por categoría, tipo, marca, disponibilidad y rango de precio.</p>
      </section>
      <SearchBar value={searchTerm} onChange={onSearch} />
      <FiltersPanel
        filters={filters}
        categories={categories}
        connectorTypes={connectorTypes}
        brands={brands}
        onChange={onChangeFilters}
      />
      <section className="cards-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetail={onViewDetail}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <p>No encontramos productos con esos filtros.</p>
        )}
      </section>
    </>
  )
}
