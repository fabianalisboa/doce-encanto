import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Carrinho() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.preco * item.quantity, 0);

  function finalizarPedido() {
    if (cart.length === 0) return;

    const numeroWhatsApp = "5553981005005"; // 👈 seu número
    let mensagem = "Olá, gostaria de fazer um pedido no Doce Encanto 🍰%0A%0A";

    cart.forEach((item) => {
      mensagem += `- ${item.nome} (${item.quantity}x) = R$ ${(item.preco * item.quantity).toFixed(2)}%0A`;
    });

    mensagem += `%0A💰 Total: R$ ${total.toFixed(2)}`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, "_blank");

    clearCart();
  }

  return (
    <div>
      <h2>🛒 Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <span>
                {item.nome} - {item.quantity}x
              </span>{" "}
              |{" "}
              <span>R$ {(item.preco * item.quantity).toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{ marginLeft: "10px" }}
              >
                Remover
              </button>
            </div>
          ))}
          <h3>Total: R$ {total.toFixed(2)}</h3>
          <button onClick={finalizarPedido}>Finalizar Pedido no WhatsApp</button>
        </div>
      )}
    </div>
  );
}
