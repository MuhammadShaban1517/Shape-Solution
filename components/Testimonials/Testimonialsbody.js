import Head from 'next/head';
import Image from 'next/image';
import styles from "./Testimonialsbody.module.css";


export default function Testimonialsbody() {
	return(
		<>	
			<div className="container">
				<section className={styles.section1}>
					<div className={styles.main}>
						<h2 className={styles.experh2}>OUR TESTIMONIALS</h2>
					</div>
					<p className={styles.firstp}>"ShapeSol work meets the mark. The team is professional,
					 and on top of the ball. They always make a concerted effort , organized,
					 to fully understand the requirements for their assignments.for their 
					 Steelkiwi is a reliable vendor that always delivers."</p>
					 <p className={styles.secondp}>Luis Desalvo<strong> - CREO TECH</strong></p>
				</section>	 
			</div>
				<div className={styles.maindiv}>
					<section className={styles.section2}>
						<div className={styles.color}>
							<div className="container">
								<h2 className={styles.heading}>SOME FUN FACTS</h2>
								<div className={styles.context}>
									<div className="row">
										<div className="col-sm-4">
											<div className={styles.circle}>
												<Image src="/Images/clock1.png"
												width={100}
												height={100}
												className={styles.clock}
												></Image>
											</div>
												<h1 className={styles.h1}>3200</h1>
												<p className={styles.p}>HOURS OF WORK</p>
										</div>
										<div className="col-sm-4">
											<div className={styles.circle}>
												<Image src="/Images/clock1.png"
												width={100}
												height={100}
												className={styles.clock}
												></Image>	
											</div>
											<h1 className={styles.h1}>120</h1>	
											<p className={styles.p}>SATISFIED CLIENTS</p>
										</div>
										<div className="col-sm-4">
											<div className={styles.circle}>
												<Image src="/Images/clock1.png"
												width={100}
												height={100}
												className={styles.clock}
												></Image>	
											</div>
											<h1 className={styles.h1}>360</h1>
											<p className={styles.p}>PROJECTS DELIVERED</p>
										</div>
									</div>

								</div>
							</div>
						</div>	
					</section>
				</div>	
				
		</>	
	)

}