import type { Product } from '../types/product'

interface ProductCardProps {
  product: Product
  onViewDetail: (productId: string) => void
  onAddToCart: (productId: string) => void
}

export function ProductCard({ product, onViewDetail, onAddToCart }: ProductCardProps) {
  return (
    <article className="card">
      <img src={product.images[0]} alt={product.name} className="card-image" loading="lazy" />
      <div className="card-body">
        <p className="pill">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="muted">SKU: {product.sku}</p>
        <p>{product.description}</p>
        <div className="card-meta">
          <strong>${product.price.toFixed(2)}</strong>
          <span className={product.stock > 0 ? 'stock-ok' : 'stock-empty'}>
            {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
          </span>
        </div>
        <div className="card-actions">
          <button onClick={() => onViewDetail(product.id)}>Ver detalle</button>
          <button onClick={() => onAddToCart(product.id)} disabled={product.stock === 0}>
            Agregar
          </button>
        </div>
      </div>
    </article>
  )
}
