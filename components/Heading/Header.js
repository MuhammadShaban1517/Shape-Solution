import Head from 'next/head';
import Image from 'next/image';
import styles from "./Header.module.css";
import Link from "next/link"



export default function Header(){
	return(
	<>	
		<Head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
			
		</Head>
			<main>
				<div className={styles.Heading}>
					<div className="container">
						<a>
							<Image src="/Images/shape-sol-logo.png"
								width={300}
								height={58}
								className={styles.float}
							>
							</Image>
						</a>
						<div className={styles.floats}>
							<ul className={styles.menus}>
								  <li className={styles.float}><Link href="/Homepage"><a>Home</a></Link></li>
								  <li className={styles.float}><Link href="/Service"><a>Services</a></Link></li>
								  <li className={styles.float}><Link href="/Expertise"><a>Expertise</a></Link></li>
								  <li className={styles.float}><Link href="/Testimonials"><a>Testimonials</a></Link></li>
								  <li className={styles.float}><Link href="/Contact"><a>Contact</a></Link></li>
							</ul>
						</div>
					</div>
				</div>
			</main>
		
		
	</>	
		)
}