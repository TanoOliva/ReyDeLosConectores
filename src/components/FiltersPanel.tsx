import type { CatalogFilters } from '../types/product'

interface FiltersPanelProps {
  filters: CatalogFilters
  categories: string[]
  connectorTypes: string[]
  brands: string[]
  onChange: (filters: CatalogFilters) => void
}

export function FiltersPanel({ filters, categories, connectorTypes, brands, onChange }: FiltersPanelProps) {
  return (
    <section className="filters" aria-label="Filtros de catálogo">
      <label>
        Categoría
        <select value={filters.category} onChange={(event) => onChange({ ...filters, category: event.target.value })}>
          <option value="all">Todas</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <label>
        Tipo de conector
        <select value={filters.connectorType} onChange={(event) => onChange({ ...filters, connectorType: event.target.value })}>
          <option value="all">Todos</option>
          {connectorTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </label>
      <label>
        Marca
        <select value={filters.brand} onChange={(event) => onChange({ ...filters, brand: event.target.value })}>
          <option value="all">Todas</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </label>
      <label>
        Disponibilidad
        <select value={filters.availability} onChange={(event) => onChange({ ...filters, availability: event.target.value as CatalogFilters['availability'] })}>
          <option value="all">Todas</option>
          <option value="in-stock">Con stock</option>
          <option value="out-of-stock">Sin stock</option>
        </select>
      </label>
      <label>
        Precio mínimo
        <input type="number" min="0" value={filters.minPrice} onChange={(event) => onChange({ ...filters, minPrice: event.target.value })} />
      </label>
      <label>
        Precio máximo
        <input type="number" min="0" value={filters.maxPrice} onChange={(event) => onChange({ ...filters, maxPrice: event.target.value })} />
      </label>
    </section>
  )
}
