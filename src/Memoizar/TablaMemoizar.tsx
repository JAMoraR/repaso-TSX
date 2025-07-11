import { memo, useCallback, useState } from "react";
import FilaMemoizar from "./FilaMemoizar";
import type Persona from "../persona.model";
import { ErrorBoundary } from "react-error-boundary";

const TablaMemoizar = memo(function TablaMemoizar() {

  console.log("Renderizando el componente de tabla");

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

  const EliminarPersona = useCallback((persona: Persona) => {
    setPersonas(estadoActual => estadoActual.filter(p => p.id !== persona.id));
  }, []);

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
          <ErrorBoundary key={p.id} fallback={<>
            <tr>
              <td colSpan={3} style={{color: 'red'}}>---Error: {p.nombre}</td>
            </tr>
          </>} >
            <FilaMemoizar persona={p} eliminar={EliminarPersona} />
          </ErrorBoundary>
          
        ))}
      </tbody>
    </table>
  );
})

export default TablaMemoizar;
