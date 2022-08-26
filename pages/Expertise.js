import Head from "next/head"
import Header from "../components/Heading/Header.js";
import Expertisebody from "../components/Expertise/Expertisebody.js";
import {Footer} from "../components/Footing/Footer.js";




export default function Expertise(){
	return(
			<>
				<Head>
					<title>Expertise</title>
				</Head>
					<Header />
					<Expertisebody />
					<Footer />
			
			</>

		)
}