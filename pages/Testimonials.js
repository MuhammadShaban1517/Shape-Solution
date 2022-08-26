import Head from "next/head"
import Header from "../components/Heading/Header.js";
import Testimonialsbody from "../components/Testimonials/Testimonialsbody.js";
import {Footer} from "../components/Footing/Footer.js";


export default function Testimonials(){
	return(
			<>
				<Head>
					<title>Testimonials</title>
				</Head>
					<Header />
					<Testimonialsbody />
					<Footer />
			
			</>

		)
}