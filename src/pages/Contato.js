export default function Contato() {
  return (
    <div className="contato-container">
      <h2>Contato</h2>
      <p className="descricao-contato">
        Envie sua mensagem e retornaremos o mais rápido possível. 🍰✨
      </p>
      <form className="formulario">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Escreva sua mensagem..." rows="4" required></textarea>
        <button type="submit" className="botao">📩 Enviar Mensagem</button>
        {/* Botão opcional de WhatsApp */}
        <button
          type="button"
          className="btn-whats"
          onClick={() => window.open('https://wa.me/5553981005005', '_blank')}
        >
          💬 Falar pelo WhatsApp
        </button>
      </form>
    </div>
  );
}
