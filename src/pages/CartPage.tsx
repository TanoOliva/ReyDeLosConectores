import type { Product } from '../types/product'

interface CartLine {
  product: Product
  quantity: number
}

interface CartPageProps {
  lines: CartLine[]
  onDecrease: (productId: string) => void
  onIncrease: (productId: string) => void
  onRemove: (productId: string) => void
}

export function CartPage({ lines, onDecrease, onIncrease, onRemove }: CartPageProps) {
  const total = lines.reduce((acc, line) => acc + line.product.price * line.quantity, 0)

  return (
    <section>
      <h1>Carrito de compras</h1>
      {lines.length === 0 ? (
        <p>Aún no agregas productos.</p>
      ) : (
        <>
          <div className="cart-list">
            {lines.map((line) => (
              <article key={line.product.id} className="mini-card cart-row">
                <div>
                  <h3>{line.product.name}</h3>
                  <p className="muted">SKU: {line.product.sku}</p>
                </div>
                <div className="cart-controls">
                  <button onClick={() => onDecrease(line.product.id)}>-</button>
                  <span>{line.quantity}</span>
                  <button onClick={() => onIncrease(line.product.id)}>+</button>
                  <button className="ghost" onClick={() => onRemove(line.product.id)}>Quitar</button>
                </div>
                <strong>${(line.product.price * line.quantity).toFixed(2)}</strong>
              </article>
            ))}
          </div>
          <h2>Total: ${total.toFixed(2)}</h2>
          <button>Finalizar compra (base preparada para pagos)</button>
        </>
      )}
    </section>
  )
}
