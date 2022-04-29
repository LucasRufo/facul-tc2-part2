export function Mapa() {
  return (
    <section className="mapa">
      <div className="container">
        <div className="mapa-title">Mapa</div>
        <div className="mapa-text">
          Nossa localização fica em São Paulo, venha nos conhecer.
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2619628235984!2d-46.78319968449172!3d-23.666588071372907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53af46420527%3A0xeb99ed9009f47af6!2sUNASP%20SP!5e0!3m2!1spt-BR!2sbr!4v1647044305392!5m2!1spt-BR!2sbr"
        width="600" height="450" style={{ border: '0' }} allowFullScreen loading="lazy">
      </iframe>
    </section>
  )
}