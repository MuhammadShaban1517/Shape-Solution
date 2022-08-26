import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from "../components/Heading/Header.js";
import Body from "../components/Body/Body.js";
import {Footer} from "../components/Footing/Footer.js";



export default function Home() {
  
  return (
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
