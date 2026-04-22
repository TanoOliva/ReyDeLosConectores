export function AboutPage() {
  return (
    <section>
      <h1>Nosotros</h1>
      <p>
        Somos una tienda especializada en conectores electrónicos para aplicaciones profesionales y educativas.
        Nuestro enfoque combina asesoría técnica, trazabilidad de stock y catálogo claro para compras sin fricción.
      </p>
      <div className="spec-grid">
        <article className="mini-card">
          <h3>Misión</h3>
          <p>Entregar conectividad confiable para proyectos que no pueden fallar.</p>
        </article>
        <article className="mini-card">
          <h3>Visión</h3>
          <p>Ser referente regional en distribución técnica de conectores electrónicos.</p>
        </article>
        <article className="mini-card">
          <h3>Clientes</h3>
          <p>Talleres, integradores, estudiantes, makers, pymes e industria.</p>
        </article>
      </div>
    </section>
  )
}
