import { faqItems } from '../data/faq'

export function FaqPage() {
  return (
    <section>
      <h1>Preguntas frecuentes</h1>
      <div className="faq-list">
        {faqItems.map((item) => (
          <details key={item.question} className="mini-card">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
