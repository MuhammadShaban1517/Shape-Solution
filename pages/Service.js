import Head from "next/head"
import Header from "../components/Heading/Header.js";
import Servicebody from "../components/Services/Servicebody.js";
import {Footer} from "../components/Footing/Footer.js";


export default function Service(){
	return(
			<>
				<Head>
					<title>Service</title>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
				</Head>
					    <Header />
      					<Servicebody />
      					<Footer />
			</>

		)
}