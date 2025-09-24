import Header from "../components/Header";
import Footer from "../components/Footer";
import CardProduto from "../components/CardProduto";

const produtos = [
  { id: 1, nome: "Bolo de Chocolate", preco: 35, imagem: "/produtos/bolo3.jpg" },
  { id: 2, nome: "Bolo de Doce de Leite", preco: 30, imagem: "/produtos/bolo2.jpg" },
  { id: 3, nome: "Bolo de Cenoura", preco: 30, imagem: "/produtos/bolo1.jpg" },
  { id: 4, nome: "Donut", preco: 15, imagem: "/produtos/donut.png" },
  { id: 5, nome: "Quindim", preco: 10, imagem: "/produtos/quim.avif" },

];

export default function Produtos() {
  return (
    <div>
      <Header />
      <h2 className="titulo">Todos os Produtos</h2>
      <div className="produtos-container">
        {produtos.map((prod) => (
          <CardProduto key={prod.id} produto={prod} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
