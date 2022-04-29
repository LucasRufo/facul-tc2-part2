export function Visao() {
  return (
    <section id="visao" className="visao">
      <div className="container">
        <div className="visao-title">Visão</div>
        <div className="visao-text">
          Nossa visão se baseia em três pilares.
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-title">
              <img className="card-image" src="/images/salad.png" alt="Salada" />
              <span className="card-name">Alimentação</span>
            </div>
            <div className="card-text">Uma grande parte do nosso dia se baseia na alimentação correta, sempre com frutas e
              verduras presentes.</div>
          </div>

          <div className="card">
            <div className="card-title">
              <img className="card-image" src="/images/exercise.png" alt="Exercícios" />
              <span className="card-name">Exercícios</span>
            </div>
            <div className="card-text">Exercícios diários são extremamente importantes para nossa saúde e para o nosso
              corpo, então também colocamos como prioridade.</div>
          </div>

          <div className="card">
            <div className="card-title">
              <img className="card-image" src="/images/rest.png" alt="Descanso" />
              <span className="card-name">Descanso</span>
            </div>
            <div className="card-text">Por último o descanso, que é importante para nosso corpo conseguir se recuperar
              corretamente dos exercícios.</div>
          </div>
        </div>
      </div>
    </section>
  )
}