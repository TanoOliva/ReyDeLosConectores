import { ProductCard } from '../components/ProductCard'
import type { Product } from '../types/product'

interface HomePageProps {
  featuredProducts: Product[]
  onViewCatalog: () => void
  onQuote: () => void
  onViewDetail: (productId: string) => void
  onAddToCart: (productId: string) => void
}

const categories = ['Automotriz', 'Industrial', 'Prototipado', 'Audio', 'Energía', 'Computación', 'Electrónica general']

export function HomePage({ featuredProducts, onViewCatalog, onQuote, onViewDetail, onAddToCart }: HomePageProps) {
  return (
    <>
      <section className="hero">
        <p className="pill">Ecommerce técnico de conectores electrónicos</p>
        <h1>Conectores confiables para proyectos exigentes</h1>
        <p>
          Catálogo profesional con fichas técnicas claras, stock actualizado y despacho rápido para técnicos,
          empresas, estudiantes y makers.
        </p>
        <div className="hero-actions">
          <button onClick={onViewCatalog}>Ver catálogo</button>
          <button className="ghost" onClick={onQuote}>Cotizar</button>
        </div>
      </section>

      <section>
        <h2>Categorías destacadas</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <article key={category} className="mini-card">
              <h3>{category}</h3>
              <p>Conectores y accesorios técnicos seleccionados.</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Productos destacados</h2>
        <div className="cards-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetail={onViewDetail}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>¿Por qué comprar con nosotros?</h2>
        <ul className="benefits-list">
          <li>Variedad de conectores para múltiples industrias.</li>
          <li>Fichas técnicas claras para decisiones de compra precisas.</li>
          <li>Stock actualizado para planificación operativa real.</li>
          <li>Despacho rápido con seguimiento de envío.</li>
        </ul>
      </section>
    </>
  )
}
