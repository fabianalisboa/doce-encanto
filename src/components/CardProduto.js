import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles.css";

export default function CardProduto({ produto }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco.toFixed(2)}</p>
      <button onClick={() => addToCart(produto)}>Adicionar ao Carrinho</button>
    </div>
  );
}
