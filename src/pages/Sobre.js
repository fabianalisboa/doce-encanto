import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Sobre() {
  return (
    <div>
      <Header />
      <h2 className="titulo">Sobre Nós</h2>
      <p className="texto">
        A Doce Encanto nasceu para adoçar sua vida com os melhores bolos e doces
        da cidade. Tudo feito com carinho e ingredientes selecionados.
      </p>
      <Footer />
    </div>
  );
}
