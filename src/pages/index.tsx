export default function Home() {
  return (
    <main>

      {/* navbar */}
      <header id="inicio">
        <nav className="nav-box container">
          <a href="#" className="logo"><img src="images/logo.svg" alt="logo" /></a>
          <ul className="menu">
            <li className="menu-item"><a className="menu-link" href="#inicio">Início</a></li>
            <li className="menu-item"><a className="menu-link" href="#visao">Visão</a></li>
            <li className="menu-item"><a className="menu-link" href="#missao">Missão</a></li>
            <li className="menu-item"><a className="menu-link" href="#valores">Valores</a></li>
            <li className="menu-item"><a className="menu-link" href="#imc">IMC</a></li>
            <li className="menu-item"><a className="menu-link" href="#cadastro">Cadastro</a></li>
          </ul>
        </nav>
      </header>

      {/* banner */}
      <section className="banner" style={{ backgroundSize: 'cover' }}>
        <div className="container banner-box">
          <div className="banner-title">Sua sáude é extremamente importante.</div>
          <div className="banner-text">
            Por isso aqui na E-Saúde te ajudamos a entender melhor práticas e hábitos que te
            ajudarão na caminhada para uma vida saudável.
          </div>
        </div>
      </section>

      {/* visao */}
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

      <hr />

      {/* missao */}
      <section id="missao" className="missao">
        <div className="container">
          <div className="missao-title">Missão</div>
          <div className="missao-text">
            A missão da nossa empresa é ajudar as pessoas através da informação, então agrupamos materiais, artigos, blogs
            que oferecem contéudo sobre saúde. Também oferecemos nosso aplicativo que te permite ter um controle maior de
            sua rotina de exercícios e alimentação.
          </div>
        </div>
      </section>

      <hr />

      {/* valores */}
      <section id="valores" className="valores">
        <div className="container">
          <div className="valores-title">Valores</div>
          <div className="valores-text">
            Nossos principais valores envolvem as características que mais damos atenção aqui dentro da E-Saúde.
          </div>
          <div className="valores-content">
            <ul className="valores-list">
              <li className="valores-item">Transparência</li>
              <li className="valores-item">Ética</li>
              <li className="valores-item">Equilíbrio</li>
              <li className="valores-item">Sustentabilidade</li>
            </ul>
            <ul className="valores-list">
              <li className="valores-item">Reponsabilidade</li>
              <li className="valores-item">Simplicidade</li>
              <li className="valores-item">Resultados</li>
              <li className="valores-item">Criatividade</li>
            </ul>
          </div>
        </div>
      </section>

      <hr />

      {/* imc */}
      <section id="imc" className="imc">
        <div className="container">
          <div className="imc-title">O que é IMC?</div>
          <div className="imc-text">
            IMC é a classNameificação do índice de massa corporal, ele pode nos ajudar a identificar obesidade ou desnutrição
            em crianças, adolescentes, adultos e idosos.
            <br />
            <br />
            É importante sabermos nosso IMC para podermos ajustar nossa rotina de exercícios e alimentação e atingirmos um
            peso saudável para nossa idade.
            <br />
            <br />
            Por isso a E-Saúde oferece uma calculadora de IMC. Preencha o formulário abaixo e veja o seu.
          </div>

          <div className="imc-form">
            <form id="formIMC">
              <div className="imc-form-group">
                <label htmlFor="peso" className="label">Peso <small>(ex: 80,5)</small></label>
                <input type="text" name="peso" id="peso" className="input" placeholder="Peso" />
              </div>
              <div className="imc-form-group">
                <label htmlFor="altura" className="label">Altura <small>(ex: 1,80)</small></label>
                <input type="text" name="altura" id="altura" className="input" placeholder="Altura" />
              </div>
              <div>
                <button type="submit" className="button">Calcular</button>
                <button type="reset" className="button">Limpar</button>
              </div>

              <div id="resultado" className="resultado d-none"></div>
            </form>

            <div className="imc-table-section">
              <table className="imc-table">
                <thead>
                  <tr>
                    <th>classNameificação</th>
                    <th>IMC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="abaixoPeso">
                    <td>Abaixo do peso</td>
                    <td>Abaixo de 18,5</td>
                  </tr>
                  <tr id="pesoNormal">
                    <td>Peso normal</td>
                    <td>18,5 a 24,9</td>
                  </tr>
                  <tr id="sobrepeso">
                    <td>Sobrepeso</td>
                    <td>25 a 29,9</td>
                  </tr>
                  <tr id="obesidadeI">
                    <td>Obesidade grau I</td>
                    <td>30 a 34,9</td>
                  </tr>
                  <tr id="obesidadeII">
                    <td>Obesidade grau II</td>
                    <td>35 a 39,9</td>
                  </tr>
                  <tr id="obesidadeIII">
                    <td>Obesidade grau III</td>
                    <td>Maior ou igual 40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </section >

      <hr />

      {/* form cadastro */}
      <section id="cadastro" className="cadastro">
        <div className="container">
          <div className="cadastro-title">Cadastro</div>
          <div className="cadastro-text">
            Realize aqui seu cadastro no site.
          </div>

          <form className="form-cadastro" id="formCadastro">

            <div className="form-group">
              <div className="w-100">
                <label htmlFor="nome">Nome Completo: </label>
                <input className="input" type="text" name="nome" id="nome" />
              </div>

              <div className="w-50">
                <label htmlFor="dataNascimento">Data de Nascimento: </label>
                <input className="input" type="text" name="dataNascimento" id="dataNascimento" />
              </div>
            </div>

            <div className="form-group">
              <div className="w-100">
                <label htmlFor="cpf">CPF: </label>
                <input className="input" type="text" name="cpf" id="cpf" />
              </div>
              <div className="w-50">
                <label htmlFor="sexo">Sexo: </label>

                <input type="radio" name="sexo" id="radioMasculino" value="Masculino" />
                <label htmlFor="radioMasculino">Masculino</label>

                <input type="radio" name="sexo" id="radioFeminino" value="Feminino" />
                <label htmlFor="radioFeminino">Feminino</label>

                <input type="radio" name="sexo" id="radioOutro" value="Outro" />
                <label htmlFor="radioOutro">Outro</label>
              </div>
            </div>

            <div className="form-group">
              <div className="w-100">
                <label htmlFor="logradouro">Logradouro: </label>
                <input className="input" type="text" name="logradouro" id="logradouro" />
              </div>

              <div className="w-100">
                <label htmlFor="numero">Número: </label>
                <input className="input" type="text" name="numero" id="numero" />
              </div>

              <div className="w-100">
                <label htmlFor="cep">CEP: </label>
                <input className="input" type="text" name="cep" id="cep" />
              </div>
            </div>

            <div className="form-group">
              <div className="w-100">
                <label htmlFor="cidade">Cidade: </label>
                <input className="input" type="text" name="cidade" id="cidade" />
              </div>

              <div className="w-100">
                <label className="label" htmlFor="uf">UF: </label>
                <input className="input" type="text" name="uf" id="uf" />
              </div>
            </div>

            <div className="action-buttons">
              <button className="button" type="submit">Enviar</button>
              <button className="button" type="reset">Limpar</button>
            </div>

          </form>
        </div>
      </section>

      <hr />

      {/* mapa google */}
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

    </main>
  )
}
