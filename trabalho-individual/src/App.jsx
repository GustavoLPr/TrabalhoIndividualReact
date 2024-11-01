import React from 'react';
import Cabecalho from './components/cabecalho';
import Rodape from './components/rodape';
import "./components/estilo.css"
import Calculo from './components/calculo';

export default function App() {
  return (
    <div>
      <Cabecalho />
      <Calculo />
      <Rodape />
    </div>
  );
}
