export function Navbar() {
  return (
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
  )
}