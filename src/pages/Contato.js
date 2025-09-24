
export default function Contato() {
  return (
    <div>
      {}
      <h2 className="titulo">Contato</h2>
      <form className="formulario">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      {}
    </div>
  );
}