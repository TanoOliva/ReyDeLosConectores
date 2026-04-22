import { useMemo, useState } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { products } from './data/products'
import { AboutPage } from './pages/AboutPage'
import { CartPage } from './pages/CartPage'
import { CatalogPage } from './pages/CatalogPage'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import type { PageKey } from './types/navigation'
import type { CatalogFilters } from './types/product'

const defaultFilters: CatalogFilters = {
  category: 'all',
  connectorType: 'all',
  brand: 'all',
  availability: 'all',
  minPrice: '',
  maxPrice: '',
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('home')
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState<CatalogFilters>(defaultFilters)
  const [cartItems, setCartItems] = useState<Record<string, number>>({})

  const categories = useMemo(() => [...new Set(products.map((product) => product.category))], [])
  const connectorTypes = useMemo(() => [...new Set(products.map((product) => product.connectorType))], [])
  const brands = useMemo(() => [...new Set(products.map((product) => product.brand))], [])

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    const minPrice = Number(filters.minPrice) || 0
    const maxPrice = Number(filters.maxPrice) || Number.POSITIVE_INFINITY

    return products.filter((product) => {
      const matchesQuery =
        query.length === 0 ||
        product.name.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.compatibility.some((item) => item.toLowerCase().includes(query))

      const matchesCategory = filters.category === 'all' || product.category === filters.category
      const matchesType = filters.connectorType === 'all' || product.connectorType === filters.connectorType
      const matchesBrand = filters.brand === 'all' || product.brand === filters.brand
      const matchesAvailability =
        filters.availability === 'all' ||
        (filters.availability === 'in-stock' ? product.stock > 0 : product.stock === 0)
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice

      return matchesQuery && matchesCategory && matchesType && matchesBrand && matchesAvailability && matchesPrice
    })
  }, [filters, searchTerm])

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId),
    [selectedProductId],
  )

  const cartCount = useMemo(
    () => Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0),
    [cartItems],
  )

  const cartLines = useMemo(
    () =>
      Object.entries(cartItems)
        .map(([productId, quantity]) => {
          const product = products.find((item) => item.id === productId)
          return product ? { product, quantity } : null
        })
        .filter((line): line is NonNullable<typeof line> => line !== null),
    [cartItems],
  )

  const addToCart = (productId: string) => {
    const product = products.find((item) => item.id === productId)
    if (!product || product.stock === 0) {
      return
    }

    setCartItems((previous) => {
      const currentQuantity = previous[productId] ?? 0
      const nextQuantity = Math.min(product.stock, currentQuantity + 1)
      return { ...previous, [productId]: nextQuantity }
    })
  }

  const decreaseFromCart = (productId: string) => {
    setCartItems((previous) => {
      const currentQuantity = previous[productId]
      if (!currentQuantity || currentQuantity <= 1) {
        const next = { ...previous }
        delete next[productId]
        return next
      }
      return { ...previous, [productId]: currentQuantity - 1 }
    })
  }

  const removeFromCart = (productId: string) => {
    setCartItems((previous) => {
      const next = { ...previous }
      delete next[productId]
      return next
    })
  }

  const viewProduct = (productId: string) => {
    setSelectedProductId(productId)
    setCurrentPage('product-detail')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            featuredProducts={products.slice(0, 4)}
            onViewCatalog={() => setCurrentPage('catalog')}
            onQuote={() => setCurrentPage('contact')}
            onViewDetail={viewProduct}
            onAddToCart={addToCart}
          />
        )
      case 'catalog':
        return (
          <CatalogPage
            products={filteredProducts}
            searchTerm={searchTerm}
            filters={filters}
            categories={categories}
            connectorTypes={connectorTypes}
            brands={brands}
            onSearch={setSearchTerm}
            onChangeFilters={setFilters}
            onViewDetail={viewProduct}
            onAddToCart={addToCart}
          />
        )
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setCurrentPage('catalog')}
            onAddToCart={addToCart}
          />
        ) : (
          <p>Producto no encontrado.</p>
        )
      case 'cart':
        return (
          <CartPage
            lines={cartLines}
            onDecrease={decreaseFromCart}
            onIncrease={addToCart}
            onRemove={removeFromCart}
          />
        )
      case 'about':
        return <AboutPage />
      case 'faq':
        return <FaqPage />
      case 'contact':
        return <ContactPage />
      default:
        return null
    }
  }

  return (
    <div className="app-shell">
      <Navbar currentPage={currentPage} cartCount={cartCount} onNavigate={setCurrentPage} />
      <main className="content">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
