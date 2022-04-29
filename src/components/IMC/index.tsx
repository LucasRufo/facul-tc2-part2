export function IMC() {
  return (
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
  )
}