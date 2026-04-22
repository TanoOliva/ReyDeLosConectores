import type { PageKey } from '../types/navigation'

interface FooterProps {
  onNavigate: (page: PageKey) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer">
      <div>
        <h4>Rey de los Conectores</h4>
        <p>Venta técnica de conectores electrónicos para industria, talleres y makers.</p>
      </div>
      <div>
        <h4>Contacto</h4>
        <p>ventas@reydelosconectores.cl</p>
        <p>+56 9 1234 5678</p>
      </div>
      <div>
        <h4>Enlaces</h4>
        <button className="footer-link" onClick={() => onNavigate('catalog')}>Ver catálogo</button>
        <button className="footer-link" onClick={() => onNavigate('contact')}>Cotizar</button>
      </div>
      <div>
        <h4>Redes</h4>
        <p>LinkedIn · Instagram · YouTube</p>
      </div>
    </footer>
  )
}
