import "../styles.css";

export default function CardProduto({ produto }) {
  return (
    <div className="card">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco}</p>
      <button>Comprar</button>
    </div>
  );
}
