import CardProduto from "../components/CardProduto";

const produtos = [
  { id: 1, nome: "Bolo de Chocolate", preco: 35, imagem: "/produtos/bolo3.jpg" },
  { id: 2, nome: "Bolo de Doce de Leite", preco: 30, imagem: "/produtos/bolo2.jpg" },
  { id: 3, nome: "Bolo de Cenoura", preco: 30, imagem: "/produtos/bolo1.jpg" },
  { id: 4, nome: "Donut", preco: 15, imagem: "/produtos/donut.png" },
  { id: 5, nome: "Quindim", preco: 10, imagem: "/produtos/quim.avif" },
  
  // novos produtos 🍫🍰
  { id: 6, nome: "Brownie", preco: 18, imagem: "/produtos/brownie.jpeg" },
  { id: 7, nome: "Brigadeiro Gourmet", preco: 5, imagem: "/produtos/brigadeiro.jpg" },
  { id: 8, nome: "Copo da Felicidade", preco: 20, imagem: "/produtos/copofelicidade.jpg" },
];

export default function Produtos() {
  return (
    <div>
      <h2 className="titulo">Todos os Produtos</h2>
      <div className="produtos-container">
        {produtos.map((prod) => (
          <CardProduto key={prod.id} produto={prod} />
        ))}
      </div>
    </div>
  );
}
