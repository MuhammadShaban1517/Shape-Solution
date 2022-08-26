import Head from 'next/head';
import Image from 'next/image';
import styles from "./Contactbody.module.css";

export default function Contactbody(){
	return(
		<>
			<Head>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
			</Head>
			<div className="container">
				<div className={styles.h2}>
					<h2>TELL US ABOUT YOUR PROJECT</h2>					
				</div>
				<p className={styles.p}>Got any questions about the ShapeSol? Are you interested in partnering with us? Fill the form below and submit</p>
				<section className={styles.section1}>	
					<div className="row">
						<div className="col-sm-3">
							<div className={styles.address}>
								<p className={styles.grey}>MBCity Plaza, I8 Markaz,</p>
								<p className={styles.grey}>Islamabad. Pakistan.</p>
								<p className={styles.black}><a href="tel:0518732365">(051) 8732 365</a></p>
								<p className={styles.black}><a href="info@shapesol.com">info@shapesol.com</a></p>
							</div>
						</div>
						<div className="col-sm-9">
								<h1 className={styles.h1}>Say hello!</h1>
							<div className="col-sm-6">
								<form>
									<input type="text" required='required' placeholder="Name" className={styles.form1}></input>
								</form>
							</div>
							<div className="col-sm-6">
								<form>
									<input type="text" required='required' placeholder="Email" className={styles.form1}></input>
								</form>
							</div>
							<div className="col-sm-12">
								<form className={styles.form}>
									<input type="text" required='required' placeholder="Message" className={styles.form1}></input>
								</form>
							</div>		
						</div>
						<div className={styles.btn}>
							<button type="submit">Send Message</button>
						</div>
					</div>
				</section>	
			</div>			


		</>

		)
}