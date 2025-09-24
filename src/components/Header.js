import { Link } from "react-router-dom";
import "../styles.css";

export default function Header() {
  return (
    <header className="header">
      <img src="/logo.jpg" alt="Logo Doce Encanto" className="logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
