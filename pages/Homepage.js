import Head from "next/head"
import Header from "../components/Heading/Header.js";
import Body from "../components/Body/Body.js";
import {Footer} from "../components/Footing/Footer.js";


export default function Homepage(){
	return(
		<>
		<Head>
          <title>Shape Solutions</title>
        </Head>


      <Header />
      <Body />
      <Footer />


		</>
		)
}
