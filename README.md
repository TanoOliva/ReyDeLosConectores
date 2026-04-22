# Rey de los Conectores

Estructura inicial de ecommerce moderno para venta de conectores electrónicos (automotriz, industrial, prototipado, audio, energía, computación y electrónica general), diseñada para crecer con autenticación y pagos en etapas futuras.

## Stack base
- React + TypeScript + Vite
- Arquitectura modular por `components`, `pages`, `data` y `types`
- UI responsive con estilo técnico/profesional

## Funcionalidades incluidas
- Inicio con hero, categorías, productos destacados, beneficios y CTA
- Catálogo con buscador y filtros por categoría, tipo, marca, disponibilidad y precio
- Vista de detalle con especificaciones técnicas y compatibilidad
- Carrito de compras básico
- Secciones: Nosotros, FAQ y Contacto
- Footer con datos de contacto, redes y enlaces clave

## Estructura base
```text
src/
  components/
    Navbar.tsx
    Footer.tsx
    ProductCard.tsx
    SearchBar.tsx
    FiltersPanel.tsx
  data/
    products.ts
    faq.ts
  pages/
    HomePage.tsx
    CatalogPage.tsx
    ProductDetailPage.tsx
    CartPage.tsx
    AboutPage.tsx
    FaqPage.tsx
    ContactPage.tsx
  types/
    product.ts
    navigation.ts
  App.tsx
  index.css
```

## Desarrollo
```bash
npm install
npm run dev
npm run lint
npm run build
```
