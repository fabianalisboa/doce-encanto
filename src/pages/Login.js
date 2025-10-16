import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function Login() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [modoCadastro, setModoCadastro] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    if (modoCadastro) {
      // Cadastro
      const novoUsuario = { nome, email, senha };
      localStorage.setItem("usuario", JSON.stringify(novoUsuario));
      setMensagem("Cadastro realizado com sucesso!");
      setModoCadastro(false);
    } else {
      // Login
      if (!usuarioSalvo) {
        setMensagem("Nenhum usuário cadastrado. Faça o cadastro primeiro.");
        return;
      }

      if (usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
        localStorage.setItem("logado", "true");
        localStorage.setItem("nomeUsuario", usuarioSalvo.nome);
        setMensagem(`Bem-vindo(a), ${usuarioSalvo.nome}!`);

        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1000);
      } else {
        setMensagem("Email ou senha incorretos!");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>{modoCadastro ? "Cadastro" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {modoCadastro && (
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">
          {modoCadastro ? "Cadastrar" : "Entrar"}
        </button>
      </form>

      {mensagem && <p className="mensagem">{mensagem}</p>}

      <p
        className="alternar"
        onClick={() => setModoCadastro(!modoCadastro)}
      >
        {modoCadastro
          ? "Já tem conta? Fazer login"
          : "Não tem conta? Cadastre-se"}
      </p>
    </div>
  );
}
