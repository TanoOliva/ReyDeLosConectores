export interface ProductSpecification {
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  sku: string
  price: number
  images: string[]
  stock: number
  description: string
  specifications: ProductSpecification[]
  compatibility: string[]
  brand: string
  category: string
  connectorType: string
}

export interface CatalogFilters {
  category: string
  connectorType: string
  brand: string
  availability: 'all' | 'in-stock' | 'out-of-stock'
  minPrice: string
  maxPrice: string
}
