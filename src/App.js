import { useState } from "react";
import "./App.css";

function App() {
  const [simbolo, setSimbolo] = useState("O");
  const [cuadrados, setCuadrados] = ([null, null, null, null, null, null, null, null, null]);
  const comprobarGanador = () => {
    if (cuadrados[0] === cuadrados[1] && cuadrados[1] === cuadrados[2] && cuadrados[0] === cuadrados[2]) {
      return cuadrados[0];
    }
    return null
  }
  let ganador = comprobarGanador();
  const cambiarEstado = () => {
    if (simbolo === "X") {
      setSimbolo("O")
    } else {
      setSimbolo("X");
    }
  };

  const mostrarGanador = () => {
    if (ganador !== null) {
      return <p>Ganador: {ganador}</p>
    }
  }
  const pintarBotones = (i) => {
    return <button onClick={() => {
      const array = cuadrados.slice();
      if (cuadrados[i] === null) {
        array[i] = simbolo
        setCuadrados(array);
        cambiarEstado();
      }
    }}>{cuadrados[i]}</button>
  };
  return (
    <div>
      {pintarBotones(0)}
      {pintarBotones(1)}
      {pintarBotones(2)}
      <br />
      {pintarBotones(3)}
      {pintarBotones(4)}
      {pintarBotones(5)}
      <br />
      {pintarBotones(6)}
      {pintarBotones(7)}
      {pintarBotones(8)}
      <br/>
      {mostrarGanador()}
    </div>
  )
}

export default App;
