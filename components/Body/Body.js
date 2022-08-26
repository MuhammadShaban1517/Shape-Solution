import Head from 'next/head';
import Image from 'next/image';
import styles from "./Body.module.css";

export default function Body(){
	return(
			<>
				<Head>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
				</Head>

					<div className={styles.img}>
						<div className="container">
							<div className={styles.first}>	
								<h2 className={styles.h1}>Software development partner for your business!</h2>
								<p className={styles.p}>
									Shape Solutions is a software development company of choice for 
									the world’s famous enterprises, SMEs, and startups. Since 2016, 
									we've been providing consultations, development, design, and software maintenance services.
								</p>
							</div>	
						</div>
					</div>

			</>
		)
}