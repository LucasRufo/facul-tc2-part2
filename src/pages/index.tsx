import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Visao } from "../components/Visao";
import { Missao } from "../components/Missao";
import { Valores } from "../components/Valores";
import { IMC } from "../components/IMC";
import { Cadastro } from "../components/Cadastro";
import { Mapa } from "../components/Mapa";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Banner />
      <Visao />

      <hr />

      <Missao />

      <hr />

      <Valores />

      <hr />

      <IMC />

      <hr />

      <Cadastro />

      <hr style={{ marginTop: '3rem' }} />

      <Mapa />

    </main>
  )
}
