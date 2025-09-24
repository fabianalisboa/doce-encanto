import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Header />  {/* Header fixo em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />  {/* Footer fixo em todas as páginas */}
    </Router>
  );
}
