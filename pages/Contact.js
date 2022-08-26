import Head from "next/head"
import Header from "../components/Heading/Header.js";
import Contactbody from "../components/Contact/Contactbody.js";
import {Footer} from "../components/Footing/Footer.js";



export default function Contact(){
	return(
			<>
				<Head>
					<title>Contact</title>
				</Head>
					<Header />
					<Contactbody />
					<Footer />
			
			</>

		)
}