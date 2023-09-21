import "./Colaborador.css";

const Colaborador = (props) => {
	const { nombre, puesto, foto } = props.datosCola;
	const colorEncabezado = props.colDestaques;
	const { eliminarColaborador } = props;

	return (
		<div className="colaborador">
			<div
				className="encabezado"
				style={{ backgroundColor: colorEncabezado }}
			></div>
			<img
				className="boton-eliminar"
				src="/img/Delete.png"
				onClick={eliminarColaborador}
				alt="boton eliminar colaborador"
				title="Eliminar Colaborador"
			/>
			<div className="info">
				<img className="foto-Cola" src={foto} alt={`foto ${nombre}`} />
				<h4> {nombre} </h4>
				<h5> {puesto} </h5>
			</div>
		</div>
	);
};

export default Colaborador;