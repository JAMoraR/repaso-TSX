import { memo } from "react";
import type Persona from "../persona.model";

const FilaMemoizar = memo(function FilaMemoizar({ persona, eliminar }: FilaProps) {

  console.log(`Cargar fila de ${persona.nombre}`)

  if (persona.nombre === "Felipe") {
    throw Error()
  }

  return (
    <>
      <tr>
        <td>{persona.nombre}</td>
        <td>{persona.departamento}</td>
        <td>
          <button onClick={() => eliminar(persona)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
})

interface FilaProps {
  persona: Persona;
  eliminar: (p: Persona) => void;
}

export default FilaMemoizar;
