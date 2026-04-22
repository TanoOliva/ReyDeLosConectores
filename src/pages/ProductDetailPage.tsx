import type { Product } from '../types/product'

interface ProductDetailPageProps {
  product: Product
  onBack: () => void
  onAddToCart: (productId: string) => void
}

export function ProductDetailPage({ product, onBack, onAddToCart }: ProductDetailPageProps) {
  return (
    <section className="detail-layout">
      <button onClick={onBack} className="ghost">← Volver al catálogo</button>
      <div className="detail-grid">
        <img src={product.images[0]} alt={product.name} className="detail-image" />
        <div>
          <p className="pill">{product.category} · {product.connectorType}</p>
          <h1>{product.name}</h1>
          <p className="muted">SKU: {product.sku} · Marca: {product.brand}</p>
          <p>{product.description}</p>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className={product.stock > 0 ? 'stock-ok' : 'stock-empty'}>
            {product.stock > 0 ? `Disponible: ${product.stock} unidades` : 'Sin stock disponible'}
          </p>
          <button onClick={() => onAddToCart(product.id)} disabled={product.stock === 0}>Agregar al carrito</button>
        </div>
      </div>

      <section>
        <h2>Especificaciones técnicas</h2>
        <div className="spec-grid">
          {product.specifications.map((specification) => (
            <article key={specification.label} className="mini-card">
              <h3>{specification.label}</h3>
              <p>{specification.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Compatibilidad y aplicaciones</h2>
        <ul className="benefits-list">
          {product.compatibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}
