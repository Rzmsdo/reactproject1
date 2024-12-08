import React from "react";





import Navbar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";





//create your first component
const Home = () => {
	return (<div className="container-block aling-content-center">
		<div className="container-floid">
			<Navbar></Navbar>
		</div>
		<div className="container">
			<Jumbotron></Jumbotron>
			<div className="row d-flex justify-content-around">
				<Card imageURL="https://picsum.photos/500/325" 
				title="Naturaleza" content="Disfruta de una buen paseo por nuestro entorno... siempre algo beneficioso" 
				bottonURL="https://www.esteveteijin.com/los-beneficios-de-los-paseos-por-la-naturaleza/"
				bottonText="Ver blog"></Card>
				<Card imageURL="https://picsum.photos/seed/picsum/500/325" 
				title="Altas cumbres" content="Nuestra relación con la Naturaleza, influye en nuestra salud de manera directa." 
				bottonURL="https://altascumbres-tn.com/blog/" bottonText="Ver blog"></Card>
				<Card imageURL="https://static.wixstatic.com/media/b249c4_7063f8237d854463b0a1c08006d8aeff~mv2.jpg/v1/fill/w_1263,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b249c4_7063f8237d854463b0a1c08006d8aeff~mv2.jpg" 
				title="Foto Club Ifach" content="Uso gratuito de estudio fotográfico completo en nuestras instalaciones" 
				bottonURL="https://www.fotoclubifach.com/" bottonText="Inscripcion"></Card>
				<Card imageURL="https://picsum.photos/500/325/?blur=2" title="Efecto Bokeh" 
				content="El término bokeh proviene de la palabra japonés ‘BOKE’ y significa desenfoque o niebla"
				 bottonURL="https://bargainfotos.com/blog/que-es-el-bokeh-en-fotografia/" bottonText="Como conseguirlo"></Card>
			</div>
		</div>
		<div className="container-floid bg-black d-flex justify-content-center" style={{ height: `4rem` }}>
			<div className="d-flex  mt-3">
				<p className="text-white mb-0">©Copyright @WebSiteLocalMode 2024</p>
			</div>
		</div>

	</div>
	);
};

export default Home;

