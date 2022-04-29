export function Cadastro() {
  return (
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
  )
}