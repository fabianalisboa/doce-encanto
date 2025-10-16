import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import "../styles.css";

export default function Header() {
  const { cart } = useContext(CartContext);
  const totalItens = cart.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();

  // Estados de login e nome
  const [logado, setLogado] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState("");

  // Ao carregar a página, verifica se existe usuário logado
  useEffect(() => {
    const nome = localStorage.getItem("nomeUsuario");
    const isLogado = localStorage.getItem("logado");
    if (isLogado && nome) {
      setLogado(true);
      setNomeUsuario(nome);
    } else {
      setLogado(false);
      setNomeUsuario("");
    }
  }, []);

  // 🚪 Função de logout
  function handleLogout() {
    localStorage.removeItem("logado");
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("usuario");

    // Atualiza o estado imediatamente
    setLogado(false);
    setNomeUsuario("");

    // Redireciona para a Home
    navigate("/");
  }

  return (
    <header className="header">
      <img src="/logo.jpg" alt="Logo Doce Encanto" className="logo" />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>

        {!logado ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <span className="boas-vindas">Olá, {nomeUsuario}!</span>
            <button onClick={handleLogout} className="btn-sair">
              Sair
            </button>
          </>
        )}

        <Link to="/carrinho" className="carrinho-link">
          🛒 Carrinho{" "}
          {totalItens > 0 && <span className="badge">{totalItens}</span>}
        </Link>
      </nav>
    </header>
  );
}
