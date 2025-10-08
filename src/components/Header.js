import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles.css";

export default function Header() {
  const { cart } = useContext(CartContext);

  const totalItens = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <img src="/logo.jpg" alt="Logo Doce Encanto" className="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/login">Login</Link>
        <Link to="/carrinho" className="carrinho-link">
          🛒 Carrinho {totalItens > 0 && <span className="badge">{totalItens}</span>}
        </Link>
      </nav>
    </header>
  );
}

