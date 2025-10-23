import { useLocation } from "react-router-dom";
import CardProduto from "../components/CardProduto";

const produtos = [
  { id: 1, nome: "Bolo de Chocolate", preco: 35, imagem: "/produtos/bolo3.jpg", categoria: "bolos" },
  { id: 2, nome: "Bolo de Doce de Leite", preco: 30, imagem: "/produtos/bolo2.jpg", categoria: "bolos" },
  { id: 3, nome: "Bolo de Cenoura", preco: 30, imagem: "/produtos/bolo1.jpg", categoria: "bolos" },
  { id: 4, nome: "Donut", preco: 15, imagem: "/produtos/donut.png", categoria: "doces" },
  { id: 5, nome: "Quindim", preco: 10, imagem: "/produtos/quim.avif", categoria: "doces" },
  { id: 6, nome: "Brownie", preco: 18, imagem: "/produtos/brownie.jpeg", categoria: "doces" },
  { id: 7, nome: "Brigadeiro Gourmet", preco: 5, imagem: "/produtos/brigadeiro.jpg", categoria: "doces" },
  { id: 8, nome: "Copo da Felicidade", preco: 20, imagem: "/produtos/copofelicidade.jpg", categoria: "doces" },

  // 🍦 Gelados
  { id: 9, nome: "Sorvete de Chocolate", preco: 18, imagem: "/produtos/sorvete.jpeg", categoria: "gelados" },
  { id: 10, nome: "Açaí", preco: 22, imagem: "/produtos/acai.jpeg", categoria: "gelados" },

  // ☕ Quentes
  { id: 11, nome: "Churros com Doce de Leite", preco: 12, imagem: "/produtos/churros.jpeg", categoria: "quentes" },
  { id: 12, nome: "Cappuccino", preco: 14, imagem: "/produtos/capuccino.jpeg", categoria: "quentes" },
  { id: 13, nome: "Chocolate Quente", preco: 16, imagem: "/produtos/chocolatequente.jpeg", categoria: "quentes" },
];

export default function Produtos() {
  const location = useLocation();
  const categoriaSelecionada = location.state?.categoria || "todos";

  const produtosFiltrados =
    categoriaSelecionada === "todos"
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaSelecionada);

  const titulo =
    categoriaSelecionada === "todos"
      ? "Todos os Produtos 🍰"
      : categoriaSelecionada === "gelados"
      ? "🍧 Promoção do Dia: Sorvetes e Açaí!"
      : categoriaSelecionada === "quentes"
      ? "☕ Promoção do Dia: Bebidas Quentes!"
      : "Promoção do Dia";

  return (
    <div>
      <h2 className="titulo">{titulo}</h2>
      <div className="produtos-container">
        {produtosFiltrados.map((prod) => (
          <CardProduto key={prod.id} produto={prod} />
        ))}
      </div>
    </div>
  );
}
