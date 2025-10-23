import CardProduto from "../components/CardProduto";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Weather from "../components/Weather"; // ✅ IMPORTAÇÃO DO CLIMA

const produtosDestaque = [
  { id: 1, nome: "Bolo de Cenoura", preco: 35, imagem: "/produtos/bolo1.jpg" },
  { id: 2, nome: "Bolo de Doce de Leite", preco: 30, imagem: "/produtos/bolo2.jpg" },
  { id: 3, nome: "Quindim", preco: 10, imagem: "/produtos/quim.avif" },
];

export default function Home() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    const isLogado = localStorage.getItem("logado");

    if (isLogado && usuarioSalvo) {
      try {
        const usuarioObj = JSON.parse(usuarioSalvo);
        setUsuario(usuarioObj.nome);
        setLogado(true);
      } catch (e) {
        console.error("Erro ao ler usuário:", e);
      }
    } else {
      setUsuario("");
      setLogado(false);
    }
  }, []);

  return (
    <div>
      {logado && usuario && (
        <h2 className="bem-vindo">
          🍰 Bem-vinda, {usuario.charAt(0).toUpperCase() + usuario.slice(1)}!
        </h2>
      )}

      <h2 className="titulo">Produtos em Destaque</h2>

      <div className="produtos-container">
        {produtosDestaque.map((prod) => (
          <CardProduto key={prod.id} produto={prod} />
        ))}
      </div>

      <button className="botao" onClick={() => navigate("/produtos")}>
        Ver Todos os Produtos
      </button>

      {/* ✅ CLIMA COMO RODAPÉ */}
      <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
        <Weather city="Pelotas" />
      </div>
    </div>
  );
}
