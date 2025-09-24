import Header from "../components/Header";
import Footer from "../components/Footer";
import CardProduto from "../components/CardProduto";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const produtosDestaque = [
  { id: 1, nome: "Bolo de Cenoura", preco: 35, imagem: "/produtos/bolo1.jpg" },
  { id: 2, nome: "Bolo de Doce de Leite", preco: 30, imagem: "/produtos/bolo2.jpg" },
  { id: 3, nome: "Quindim", preco: 10, imagem: "/produtos/quim.avif" },
];

export default function Home() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("usuario");
    if (nomeSalvo) {
      setUsuario(nomeSalvo);
    }
  }, []);

  return (
    <div>
      <Header />
      {usuario && <h2 className="bem-vindo">Bem-vinda, {usuario}!</h2>}
      <h2 className="titulo">Produtos em Destaque</h2>
      <div className="produtos-container">
        {produtosDestaque.map((prod) => (
          <CardProduto key={prod.id} produto={prod} />
        ))}
      </div>
      <button className="botao" onClick={() => navigate("/produtos")}>
        Ver Todos os Produtos
      </button>
      <Footer />
    </div>
  );
}
