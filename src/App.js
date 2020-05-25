import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
	// definir la categoria y noticias
	const [categoria, guardarCategoria] = useState("");
	const [noticias, guardarNoticias] = useState([]);

	useEffect(() => {
		const consultarAPI = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=1f7cba4b36b94ad283874c933d7fd71c`;

			const respuesta = await fetch(url);
			const noticias = await respuesta.json();

			console.log(noticias);
			guardarNoticias(noticias.articles);

			console.log(noticias.articles);
		};
		consultarAPI();
	}, [categoria]);

	return (
		<Fragment>
			<Header titulo="Buscador de Noticias" />

			<div className="container white">
				<Formulario guardarCategoria={guardarCategoria} />

				<ListadoNoticias noticias={noticias} />
			</div>
		</Fragment>
	);
}

export default App;
