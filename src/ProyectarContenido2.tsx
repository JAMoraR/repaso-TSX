export default function ProyectarContenido2(props: ProyectarContenidoProps) {
  return (
    <>
        {props.parteSuperior}
        <hr />
        {props.parteIntermedia}
        <hr />
        {props.parteInferior}
    </>
  )
}

interface ProyectarContenidoProps {
    parteSuperior: React.ReactNode;
    parteIntermedia: React.ReactNode;
    parteInferior: React.ReactNode;
}