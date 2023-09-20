import { useState } from "react";

import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";

function App() {
	// States/hooks
	const [mostrarFormulario, actualizarMostrar] = useState(false); //un state de true or false
	const [colaboradores, actualizarColaboradores] = useState([
		{
			nombre: "Juan",
			puesto: "Estudiante",
			foto: "https://github.com/jfmadridc.png",
			equipo: "Programación",
		},
		{
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "Programación",
		},
		{
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "Programación",
		},
		{
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "Programación",
		},
		{
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "Programación",
		},
		{
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "Programación",
		},
		{
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "Programación",
		},

		{
			nombre: "Tartiana",
			puesto: "My Teacher",
			foto: "https://media.licdn.com/dms/image/D4D03AQG2FWMkos_0oA/profile-displayphoto-shrink_200_200/0/1691671216460?e=1700697600&v=beta&t=9uFXPOpL9RrtwZKQjIkO_Lw7j7aTuumwcGccPKO1OLM",
			equipo: "Front End",
		},
	]); //un state que es un arreglo de objetos que va acontener a los colaboradores

	//lo que hace que muestre o oculte el formulario con el click en el boton
	const cambiarMostrar = () => {
		actualizarMostrar(!mostrarFormulario); //cambia de true a false y de false a tue
	};

	const eliminarTodo = () => {
		actualizarColaboradores([]); //cambia de true a false y de false a tue
	};

	//Registrar colaborador
	const registrarColaborador = (colaborador) => {
		//guardamos el objeto con Spread operator
		actualizarColaboradores([...colaboradores, colaborador]); //es una copia del arreglo y le añade colaborador
	};

	//lista de Equipos
	const equipos = [
		{
			titulo: "Programación",
			colorFondo: "#D9F7E9",
			colorDestaques: "#57C278",
		},
		{
			titulo: "Front End",
			colorFondo: "#E8F8FF",
			colorDestaques: "#82CFFA",
		},
		{
			titulo: "Data Science",
			colorFondo: "#F0F8E2",
			colorDestaques: "#A6D157",
		},
		{
			titulo: "Devops",
			colorFondo: "#FBD3D4",
			colorDestaques: "#E06B69",
		},
		{
			titulo: "UX y Diseño",
			colorFondo: "#F6D7ED",
			colorDestaques: "#DB6EBF",
		},
		{
			titulo: "Móvil",
			colorFondo: "#FFECBA",
			colorDestaques: "#FFBA05",
		},
		{
			titulo: "Innovacion y Gestión",
			colorFondo: "#FFDFC4",
			colorDestaques: "#FF8A29",
		},
	];

	return (
		<div className="div-app">
			<Header />
			{/* tambien se puede usar: */}
			{/* {mostrarFormulario && <Formulario />} */}

			<MiOrg switchMostrar={cambiarMostrar} eliminarTodo={eliminarTodo} />

			{mostrarFormulario ? (
				<Formulario
					equipos={equipos.map((equipo) => equipo.titulo)}
					registrarColaborador={registrarColaborador}
				/>
			) : (
				<></>
			)}

			{equipos.map((equipo) => (
				<Equipo
					datosEquipo={equipo}
					key={equipo.titulo}
					colaboradores={colaboradores.filter(
						(colaborador) => colaborador.equipo === equipo.titulo
					)}
				/>
			))}

			<Footer />
		</div>
	);
}

export default App;
