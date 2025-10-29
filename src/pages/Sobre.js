import "../styles.css";
import sobreImg from "../img/sobre.png"; // ✅ Caminho correto

export default function Sobre() {
  return (
    <div className="sobre-container">
      <h2>Sobre Nós</h2>
      <p>
        Na Doce Encanto, acreditamos que cada doce tem o poder de transformar
        momentos simples em memórias inesquecíveis. Utilizamos ingredientes selecionados,
        produção artesanal e um toque especial de carinho em cada receita.
      </p>

      <p>
        Nossa missão é entregar não apenas sobremesas, mas experiências que despertem emoções e tragam felicidade
        a cada pedaço. Aqui, cada detalhe é pensado com cuidado para garantir sabor, beleza e qualidade em cada criação.
      </p>

      <img src={sobreImg} alt="Confeitaria artesanal" className="sobre-imagem" />

      <p className="legenda-imagem">
        Doces feitos artesanalmente, com dedicação e amor em cada detalhe. 🍰✨
      </p>

      <div className="sobre-diferenciais">
        <div>✨ Produção 100% artesanal</div>
        <div>🎂 Sobremesas para todas as ocasiões</div>
        <div>❤️ Ingredientes selecionados</div>
        <div>🚚 Entrega rápida e segura</div>
      </div>
    </div>
  );
}
