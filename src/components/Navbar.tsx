import type { PageKey } from '../types/navigation'

interface NavbarProps {
  currentPage: PageKey
  cartCount: number
  onNavigate: (page: PageKey) => void
}

const menuItems: Array<{ label: string; page: PageKey }> = [
  { label: 'Inicio', page: 'home' },
  { label: 'Catálogo', page: 'catalog' },
  { label: 'Nosotros', page: 'about' },
  { label: 'FAQ', page: 'faq' },
  { label: 'Contacto', page: 'contact' },
]

export function Navbar({ currentPage, cartCount, onNavigate }: NavbarProps) {
  return (
    <header className="navbar">
      <button className="brand" onClick={() => onNavigate('home')}>
        Rey de los Conectores
      </button>
      <nav className="menu" aria-label="Principal">
        {menuItems.map((item) => (
          <button
            key={item.page}
            className={`menu-link ${currentPage === item.page ? 'active' : ''}`}
            onClick={() => onNavigate(item.page)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <button className="cart-button" onClick={() => onNavigate('cart')}>
        Carrito ({cartCount})
      </button>
    </header>
  )
}
