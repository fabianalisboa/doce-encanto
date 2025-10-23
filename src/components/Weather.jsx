import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Weather({ city = "Pelotas" }) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");
  const [mode, setMode] = useState("real"); // real | simulado
  const [sim, setSim] = useState(null); // "verao" | "frio" | "chuva"
  const [pressed, setPressed] = useState("");
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=pt`
        );
        setData(response.data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    }
    getWeather();
  }, [city, API_KEY]);

  if (status === "loading") return null;
  if (status === "error" || !data) return null;

  // 🌦 Definição de clima
  let temp = data.current.temp_c;
  let condText = (data.current.condition?.text || "").toLowerCase();

  // 🎛 Simulação manual
  if (mode !== "real") {
    if (sim === "verao") {
      temp = 30;
      condText = "ensolarado";
    } else if (sim === "frio") {
      temp = 15;
      condText = "frio";
    } else if (sim === "chuva") {
      temp = 20;
      condText = "chuva";
    }
  }

  const icon = data.current.condition?.icon;
  let promocao = {
    mensagem: "Aproveite nossas delícias!",
    categoria: "todos",
    cor: "#ffe6f1",
    textoBotao: "Ver Cardápio Completo",
  };

  // 💡 Marketing automático
  if (condText.includes("chuva")) {
    promocao = {
      mensagem: "☔ Dia de chuva combina com churros e chocolate quente!",
      categoria: "quentes",
      cor: "#ffd9e3",
      textoBotao: "Ver Doces Quentes",
    };
  } else if (temp >= 25) {
    promocao = {
      mensagem: "☀ Calor! Refresque-se com sorvete e açaí!",
      categoria: "gelados",
      cor: "#e6f6ff",
      textoBotao: "Ver Sorvetes e Açaí",
    };
  } else if (temp <= 18) {
    promocao = {
      mensagem: "❄ Friozinho! Cappuccino e chocolate quente te esperam!",
      categoria: "quentes",
      cor: "#fbe9df",
      textoBotao: "Ver Bebidas Quentes",
    };
  }

  // 🛒 Redirecionar
  const handleGo = () => {
    navigate("/produtos", { state: { categoria: promocao.categoria } });
  };

  // 🔘 Botões com efeito
  const clickWithPulse = (keyName, fn) => {
    setPressed(keyName);
    setTimeout(() => setPressed(""), 160);
    fn();
  };

  const buttonStyle = (active, keyName) => ({
    background: active ? "#ffd4e1" : "rgba(255,255,255,0.9)",
    border: active ? "2px solid #ff4081" : "1px solid rgba(0,0,0,0.08)",
    padding: "10px 14px",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transform: pressed === keyName ? "scale(0.96)" : "scale(1)",
    transition: "all 0.15s ease",
    cursor: "pointer",
  });

  return (
    <>
      {/* 🍰 Barra de clima e promoção */}
      <footer
        style={{
          background: promocao.cor,
          padding: "16px 20px",
          borderRadius: "16px 16px 0 0",
          boxShadow: "0px -6px 16px rgba(0,0,0,0.06)",
          textAlign: "center",
          width: "100%",
          maxWidth: 680,
          margin: "24px auto 0",
          fontFamily: "Arial, system-ui",
          color: "#333",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12 }}>
          <img src={icon} alt="Clima" style={{ width: 44, height: 44 }} />
          <div>
            <strong>{data.location.name} — {data.location.region}</strong><br />
            {temp}°C · {data.current.condition?.text}
          </div>
        </div>

        <p style={{ marginTop: 10, fontSize: "1rem", fontWeight: 700 }}>{promocao.mensagem}</p>

        <button
          onClick={handleGo}
          style={{
            marginTop: 8,
            background: "#ff4081",
            color: "white",
            padding: "10px 18px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: 700,
            boxShadow: "0 6px 14px rgba(255,64,129,0.25)",
            transition: "transform 120ms ease",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {promocao.textoBotao}
        </button>
      </footer>

      {/* 🎛 Painel de controle de clima */}
      <div
        style={{
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 9999,
          display: "grid",
          gap: 10,
          padding: 14,
          borderRadius: 16,
          background: "rgba(255, 230, 241, 0.94)",
          boxShadow: "0 8px 22px rgba(0,0,0,0.18)",
          border: "1px solid rgba(255,64,129,0.18)",
          maxWidth: 220,
          textAlign: "center",
        }}
      >
        <div style={{ fontWeight: 800, fontSize: 14, color: "#333", marginBottom: 4 }}>
          🍰 Clima e Sabores
        </div>

        <button
          style={buttonStyle(mode === "real", "real")}
          onClick={() => clickWithPulse("real", () => { setMode("real"); setSim(null); })}
        >
          🌎 Clima Atual
        </button>

        <button
          style={buttonStyle(mode !== "real" && sim === "verao", "verao")}
          onClick={() => clickWithPulse("verao", () => { setMode("sim"); setSim("verao"); })}
        >
          🌞 Dia de Verão
        </button>

        <button
          style={buttonStyle(mode !== "real" && sim === "frio", "frio")}
          onClick={() => clickWithPulse("frio", () => { setMode("sim"); setSim("frio"); })}
        >
          ❄ Dia Frio
        </button>

        <button
          style={buttonStyle(mode !== "real" && sim === "chuva", "chuva")}
          onClick={() => clickWithPulse("chuva", () => { setMode("sim"); setSim("chuva"); })}
        >
          ☔ Dia de Chuva
        </button>

        <small style={{ color: "#555", lineHeight: 1.3, fontSize: 12 }}>
          {mode === "real"
            ? "🌍 Promoções baseadas no clima atual"
            : sim === "verao"
            ? "☀ Sabores refrescantes de verão"
            : sim === "frio"
            ? "❄ Sabores quentinhos para o frio"
            : sim === "chuva"
            ? "☔ Delícias ideais para dias chuvosos"
            : ""}
        </small>
      </div>
    </>
  );
}
