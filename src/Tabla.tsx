import { useState } from "react";
import type Persona from "./persona.model";
import Fila from "./Fila";

export default function Tabla() {
  const personasFuente: Persona[] = [
    { id: 1, nombre: "Felipe", departamento: "Ingenieria" },
    { id: 2, nombre: "Ana", departamento: "Marketing" },
    { id: 3, nombre: "Luis", departamento: "Recursos Humanos" },
    { id: 4, nombre: "Marta", departamento: "Finanzas" },
    { id: 5, nombre: "Carlos", departamento: "IT" },
    { id: 6, nombre: "Laura", departamento: "Ventas" },
    { id: 7, nombre: "Pedro", departamento: "Logística" },
  ];

  const [personas, setPersonas] = useState(personasFuente);

  const EliminarPersona = (persona: Persona) => {
    setPersonas(personas.filter((p) => p.id !== persona.id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Departamente</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {personas.map((p) => (
          <Fila key={p.id} persona={p} eliminar={EliminarPersona} />
        ))}
      </tbody>
    </table>
  );
}
