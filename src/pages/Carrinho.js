import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles.css"; // Certifique-se que o CSS está sendo importado

export default function Carrinho() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.preco * item.quantity, 0);

  function finalizarPedido() {
    if (cart.length === 0) return;

    const numeroWhatsApp = "5553981005005";
    let mensagem = "Olá, gostaria de fazer um pedido no Doce Encanto 🍰%0A%0A";

    cart.forEach((item) => {
      mensagem += `- ${item.nome} (${item.quantity}x) = R$ ${(item.preco * item.quantity).toFixed(2)}%0A`;
    });

    mensagem += `%0A💰 Total: R$ ${total.toFixed(2)}`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, "_blank");
    clearCart();
  }

  return (
    <div className="carrinho-container">
      <h2 className="carrinho-titulo">🛒 Seu Carrinho</h2>

      {cart.length === 0 ? (
        <p className="carrinho-vazio">Seu carrinho está vazio 😢</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="carrinho-item">
              <img src={item.imagem} alt={item.nome} className="carrinho-img"/>
              <div className="carrinho-info">
                <h3>{item.nome}</h3>
                <p>Quantidade: <strong>{item.quantity}</strong></p>
                <p>Preço: <strong>R$ {(item.preco * item.quantity).toFixed(2)}</strong></p>
                <button className="btn-remover" onClick={() => removeFromCart(item.id)}>
                  ❌ Excluir
                </button>
              </div>
            </div>
          ))}
          <h3 className="total">
            Total: <span>R$ {total.toFixed(2)}</span>
          </h3>

          <button className="btn-finalizar" onClick={finalizarPedido}>
            ✅ Finalizar Pedido no WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
