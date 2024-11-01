import React, { useState } from 'react';

export default function Calculo() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [result, setResult] = useState(null);

  const calcular = () => {
    if (peso && altura) {
      const imc = peso / (altura * altura);
      setResult(imc);
    } else {
      setResult(null);
    }
  };

  const categoria = () => {
    if (result < 18.5) return "Baixo peso";
    if (result >= 18.5 && result <= 24.9) return "Eutrofia (peso adequado)";
    if (result >= 25 && result <= 29.9) return "Sobrepeso";
    if (result >= 30 && result <= 34.9) return "Obesidade grau 1";
    if (result >= 35 && result <= 39.9) return "Obesidade grau 2";
    if (result >= 40) return "Obesidade extrema";
  };

  return (
    <div className="caixa-informacoes">
      <label>Peso (kg):</label>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)} 
      />
      <label>Altura (metros):</label>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)} 
      />
      <button onClick={calcular}>Calcular IMC</button>
      {result && (
        <div className="resultado">
          <p>Seu IMC: {result.toFixed(1)} kg/m²</p>
          <p>Classificação: {categoria()}</p>
        </div>
      )}
    </div>
  );
}
