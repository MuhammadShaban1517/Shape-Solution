import Head from 'next/head';
import Image from 'next/image';
import styles from "./Footerbody.module.css";


export function Footer(){
	return(
		<>
			<Head>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
			</Head>
			<section className={styles.foot}>
				<div className="container">
					<div className={styles.main}>
						<div className="row">
							<div className="col-sm-3">
								<p>Shape Solutions is an world wide digital development company,
								 helping business with product design,
								 development and technology acceleration.</p>
							</div>
							<div className="col-sm-3">
								<h6 className={styles.h2}>Backend Technologies </h6>
								<ul className={styles.line}>
									<li className={styles.list}><a href="#">Symfony</a></li>
									<li className={styles.list}><a href="#">Zend Framework</a></li>
									<li className={styles.list}><a href="#">Laravel</a></li>
									<li className={styles.list}><a href="#">Codeignitor</a></li>
									<li className={styles.list}><a href="#">Java</a></li>
									<li className={styles.list}><a href="#">Python</a></li>
									<li className={styles.list}><a href="#">Wordpress</a></li>
									<li className={styles.list}><a href="#">NodeJs</a></li>
								</ul>
							</div>
							<div className="col-sm-3">
								<h6 className={styles.h2}>Frontend Technologies</h6>
								<ul className={styles.line}>
									<li className={styles.list}><a href="#">Angular Js</a></li>
									<li className={styles.list}><a href="#">VueJs</a></li>
									<li className={styles.list}><a href="#">ReactJs</a></li>
								</ul>
							</div>
							<div className="col-sm-3">
								<h6 className={styles.h2}>Contact</h6>
								<p>MBCity Plaza, I8 Markaz</p>
								<p>Islamabad, Pakistan</p>
								<p>(051) 8732 365</p>
								<p>info@shapesol.com</p>			
							</div>
						</div>
					</div>	
				</div>	
			</section>
		</>

		)
}