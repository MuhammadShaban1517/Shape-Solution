import Head from 'next/head';
import Image from 'next/image';
import styles from "./Servicebody.module.css";

export default function Servicebody(){
	return(
		<>
			<Head>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
				</Head>
					<div className="container">
						<div className={styles.hmain}>
							<h2 className={styles.h2}>Our Services</h2>
						</div>
					<section className={styles.section}>	
						<div className="row">
							<div className="col-sm-4">
								<div className={styles.service}>
									<Image src="/Images/pic1.png"
										width={30}
										height={30}
										className={styles.servicepic}
									>

									</Image>
								</div>
									<div className={styles.service1}>
										<h3 className={styles.serviceh3}>Branding</h3>
										<p className={styles.servicep}>Build brand identity & propel awareness of your products &
										 offerings with graphic design services.
										 We create captivating user experiences by employing the latest post-modern,
										 psychology-driven design frameworks.</p>
									</div>	
								</div>
							<div className="col-sm-4">
								<div className={styles.service}>
									<Image src="/Images/pic2.png"
										width={30}
										height={30}
										className={styles.servicepic}
									>

									</Image>
								</div>
									<div className={styles.service1}>
										<h3 className={styles.serviceh3}>Web/App Development</h3>
										<p className={styles.servicep}>Technology is the key to building companies 
										that are efficient,
										 productive, and profitable in modern markets.
										 We build custom applications to help our clients overcome challenges and prepare for the future.</p>
									</div>
							</div>
							<div className="col-sm-4">
								<div className={styles.service}>
									<Image src="/Images/pic3.png"
										width={30}
										height={30}
										className={styles.servicepic}
									>

									</Image>
								</div>
									<div className={styles.service1}>
										<h3 className={styles.serviceh3}>Quality Assurance</h3>
										<p className={styles.servicep}>We provides a full range of QA and
										 software testing services to ensure your web and mobile solutions meet the highest of standards.
										 Through manual and automated testing,
										 we build product that are efficient, flexible, and easy to maintain.</p>
									</div>
								</div>
							</div>
							<div className="row">
							<div className="col-sm-4">
								<div className={styles.service}>
									<Image src="/Images/pic1.png"
										width={30}
										height={30}
										className={styles.servicepic}
									>

									</Image>
								</div>
									<div className={styles.service1}>
										<h3 className={styles.serviceh3}>DevOps</h3>
										<p className={styles.servicep}>Build brand identity & propel awareness of your products &
										 offerings with graphic design services.
										 We create captivating user experiences by employing the latest post-modern,
										 psychology-driven design frameworks.</p>
									</div>	
								</div>
							<div className="col-sm-4">
								<div className={styles.service}>
									<Image src="/Images/pic2.png"
										width={30}
										height={30}
										className={styles.servicepic}
									>

									</Image>
								</div>
									<div className={styles.service1}>
										<h3 className={styles.serviceh3}>SEO</h3>
										<p className={styles.servicep}>Technology is the key to building companies 
										that are efficient,
										 productive, and profitable in modern markets.
										 We build custom applications to help our clients overcome challenges and prepare for the future.</p>
									</div>
							</div>
							<div className="col-sm-4">
								<div className={styles.service}>
									<Image src="/Images/pic3.png"
										width={30}
										height={30}
										className={styles.servicepic}
									>

									</Image>
								</div>
									<div className={styles.service1}>
										<h3 className={styles.serviceh3}>Technology Consultation</h3>
										<p className={styles.servicep}>We provides a full range of QA and
										 software testing services to ensure your web and mobile solutions meet the highest of standards.
										 Through manual and automated testing,
										 we build product that are efficient, flexible, and easy to maintain.</p>
									</div>
								</div>
							</div>
						</section>	
					</div>
		</>

		)
}
