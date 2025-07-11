import type Persona from "./persona.model";

export default function Fila({ persona, eliminar }: FilaProps) {
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
}

interface FilaProps {
  persona: Persona;
  eliminar: (p: Persona) => void;
}
