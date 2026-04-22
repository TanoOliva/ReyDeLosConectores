export function ContactPage() {
  return (
    <section>
      <h1>Contacto y cotizaciones</h1>
      <p>Cuéntanos qué conectores necesitas y te ayudamos a validar compatibilidad y stock.</p>
      <form className="contact-form">
        <label>
          Nombre
          <input type="text" name="name" placeholder="Nombre y apellido" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="correo@empresa.com" />
        </label>
        <label>
          Mensaje
          <textarea name="message" rows={4} placeholder="Indica SKU, cantidad y aplicación" />
        </label>
        <button type="submit">Enviar solicitud</button>
      </form>
    </section>
  )
}
