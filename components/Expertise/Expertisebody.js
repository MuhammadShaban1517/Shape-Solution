import Head from "next/head";
import styles from "./Expertisebody.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from "next/image"


export default function Expertisebody(){
	return(
		<>
			<Head>
				<title>Expertise</title>

			</Head>
			<div className="container">
				<div className={styles.main}>
					<h2 className={styles.experh2}>TOOLS & TECHNOLOGIES</h2>
				</div>
				<p className={styles.firstp}>We build software in time,
				 applying the latest technologies that optimize our work processes. 
				Frameworks currently used by our dedicated IT team to match the
				requirements of our clients</p>
				 <div className={styles.mine}>
					<Tabs  className={styles.mines}>
						<TabList className={styles.mines}>
							<Tab className={styles.menu}>All</Tab>
							<Tab className={styles.menu}>Frontend</Tab>
							<Tab className={styles.menu}>Backend</Tab>
							<Tab className={styles.menu}>Cloud & devops</Tab>
						</TabList>
					<section className={styles.bar}>
						<TabPanel>
							<div className="row">
								<div className="col-sm-3">
									<Image src="/Images/1.jpg"
										width={258}
										height={213}
									></Image>
								</div>
								<div className="col-sm-3">
									<Image src="/Images/2.jpg"
									width={258}
									height={213}
									></Image>
								</div>
								<div className="col-sm-3">
									<Image src="/Images/3.jpg"
									width={258}
									height={213}
									></Image>
								</div>
								<div className="col-sm-3">
									<Image src="/Images/4.jpg"
									width={258}
									height={213}
									></Image>
								</div>	
							</div>
							<div className="row">
								<div className="col-sm-3">
									<Image src="/Images/5.jpg"
									width={258}
									height={213}
									></Image>
								</div>
								<div className="col-sm-3">
									<Image src="/Images/6.jpg"
									width={258}
									height={213}
									></Image>
								</div>
												      	<div className="col-sm-3">
												      		<Image src="/Images/7.jpg"
												      			width={258}
												      			height={213}
												      		></Image>
												      	</div>
												      	<div className="col-sm-3">
												      		<Image src="/Images/8.jpg"
												      			width={258}
												      			height={213}
												      		></Image>
										      	</div>									      	
									      </div>
								      <div className="row">
									      	<div className="col-sm-3">
											      		<Image src="/Images/9.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/10.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/11.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/12.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
									      	</div>
								      </div>
								      <div className="row">
									      	<div className="col-sm-3">
											      		<Image src="/Images/13.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/14.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/15.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
								      </div>
								    </TabPanel>
								   </section> 
								   <section className={styles.bar}>
								    <TabPanel>
								      <div className="row">
									      	<div className="col-sm-3">
											      		<Image src="/Images/8.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/9.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/10.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/11.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
									      	</div>	
								      	</div>
								      	
								    </TabPanel>
								  </section>  
								   <section className={styles.bar}> 
								     <TabPanel>
								      <div className="row">
									      	<div className="col-sm-3">
											      		<Image src="/Images/1.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/2.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/3.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/4.jpg"
											      			width={258}
											      			height={213}
											      		></Image>

									      	</div>	
								      	</div>
								      	<div className="row">
									      	<div className="col-sm-3">
											      		<Image src="/Images/5.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/6.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/7.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	
								      	</div>
								      
								     	
								    </TabPanel>
								  </section>  
								  <section className={styles.bar}>  
								    <TabPanel>
								      <div className="row">
									      	<div className="col-sm-3">
											      		<Image src="/Images/12.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/13.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/14.jpg"
											      			width={258}
											      			height={213}
											      		></Image>
											      	</div>
											      	<div className="col-sm-3">
											      		<Image src="/Images/15.jpg"
											      			width={258}
											      			height={213}
											      		></Image>

									      	</div>	
								      	</div>
								    </TabPanel>
								  </section>  
								  </Tabs>
							</div>
							<div className={styles.mine}>
							</div>	  	
			</div>

		</>
		)
}