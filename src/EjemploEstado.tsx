import { useState } from 'react';
import Cabecera from './Cabecera';
import MostratTexto from './MostrarTexto';
// import styles from './App.module.css';

export default function EjemploEstado() {

  const [texto, setTexto] = useState('');

  const manejarClick = () => {
    alert('click');
  }

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setTexto(e.currentTarget.value);
  }

  return (
    <>
      <Cabecera />

      <button onClick={manejarClick}>Clickeame</button>
      <div>
        <input onKeyUp={(e) => {manejarKeyUp(e)}} />
      </div>
      <MostratTexto texto={texto} />
    </>
  );
}
