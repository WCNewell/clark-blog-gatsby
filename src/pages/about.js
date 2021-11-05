import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ClarkAlyeska = () => {
  return (
		<StaticImage
			src='../images/ClarkAlyeska.jpg'
			alt="Clark Newell at Alyeska Ski Resort"
			placeholder="blurred"
		/>
	)
}

const About = () => (
	<>  
		<Seo title='About' />
			<div className="main-grid">
				<Header />
				<h1 className="page-title">about</h1>
				<div className="grid-one">
					<ClarkAlyeska />
					<p className="caption">Hello World! I'm a Customer service manager, web developer, outdoorsman and pop culture enthusist. Photo of myself on the Alyeska ski resort headwall while previewing the Cirque Series 2021 race course by Robyn Newell, July 2021.</p>
					<h2>Goal</h2>
					<p>To represent your software company in support, implementation, quality analysis, product management, development and evangelism as my skills continue to grow.</p>
				</div>
				<div className="grid-two">	
					<h2>Highlighted Experience</h2>
					<ul>
						<li>
							<h3 className="dark-header">Smith's Marketplace - Customer Service Manager</h3>
							<p>Sept 2018 - Current</p>
							<ul>
								<li>Responsible for supervising a 170,000 sq. ft. superstore in store directors' absence</li>
								<li>Supervise and direct front-end employee activities, protect substantial cash assets, and work mandatory overtime as needed</li>
								<li>Ensure maintenance and operability of check-out technology including self-checkout robots and cash recycler</li>
								<li>Trained in grocery inventory ordering as well as selection and curbside delivery of online pickup orders</li>
							</ul>
						</li>
						<li>
							<h3 className="dark-header">Red Pepper Software - Software Development Intern</h3>
							<p>Jan 2019 - Nov 2019</p>
							<ul>
								<li>Using Jira as the productivity tool inline with scrum methodology and agile workflow, assisted team with QA, pair programming, code review and full stack coding assignments building proprietary software for multiple clients</li>
								<li>While managing multiple tickets on strict tempo timers, switched between different tech stacks and languages throughout the day</li>
								<li>Worked in frontend web and mobile development using HTML, CSS, Sass, JavaScript, TypeScript, PHP,  Razor, Xamarin.iOS, amd JS frameworks such as Angular</li>
								<li>Customized templates on e-commerce platforms such as Shopify and blog-sites such as WordPress and Magento</li>
								<li>Worked in backend development using C#, ASP.NET, Entity framework and SQL</li>
							</ul>
						</li>
						<li>
							<h3 className="dark-header">Flynn Restaurant Group - Applebee's Assistant Manager</h3>
							<p>Jan 2016 - Nov 2016</p>
							<ul>
								<li>Trained to oversee every aspect of a full service casual dining restaurant</li>
								<li>Singlehandedly ran the restaurant while supervising up to 30 people per shift</li>
								<li>Learned and preformed with proficiency, every single position in the front and back of house</li>
								<li>Managerial duties included daily/weekly inventory, supply orders, interviewing, hiring, training, and promoting special marketing events</li>
							</ul>
						</li>
						<li>
							<h3 className="dark-header">Great West Financial - Account Administrator</h3>
							<p>Aug 2014 - Jul 2015</p>
							<ul>
								<li>As part of the cash processing team, provided expeditious and accurate distribution of retirement contributions for various retirement plans and their participants</li>
								<li>Monitored, researched, adjusted and cleared outstanding items in all suspense accounts</li>
								<li>Trained to become a subject matter expert in IRA direct rollovers and plan-to-plan transfers</li>
							</ul>
						</li>	
						<li>
							<h3 className="dark-header">University of Utah - Administrative Assistant</h3>
							<p>Dec 2007 - Jul 2014</p>
							<ul>
								<li>Former Assistant to the Director of the Center for Engineering Innovation in the Dept. of Electrical & Computer Engineering and Nanotechnology Institute of Utah</li>
								<li>Coordinated the design and development of websites, social media, and marketing materials for the center</li>
								<li>Provided support to research faculty, visiting scholars, guest speakers and staff by arranging meetings and travel</li>
								<li>Organized special events and conferences including venue selection, catering, promotion, sponsorship, media materials and event set-up</li>
								<li>Coordinated project and customer resource management using CRM tools such as Pipedrive and Zoho</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className="grid-three">
					<h2>Education</h2>
					<ul>
						<li>
							<h3 className="dark-header">Galvanize</h3>
							<h4>Web Development Immersive Certificate</h4>
							<p>
								<a className="dark-link" href="https://www.galvanize.com/"> Galvanize, </a>in association with Hack Reactor, provides a 6-month coding bootcamp which trains participants in building full-stack JavaScript web applications. In a fully immersive developer environment, Galvanize participants complete industry focused drills, which include front-end frameworks, building back-end databases with API CRUD connectivity between server and client, pair programming, and agile workflow.</p>	
						</li>
						<li>
							<h3 className="dark-header">University of Utah</h3>
							<h4>Bachelor of Arts in Music</h4>
							<p>Completed a liberal arts degree in music along with a German minor, also intentionally completed multiple business, communication and marketing electives all while working full time as an adminastrator for the College of Engineering.</p>	
						</li>
					</ul>
					<h2>Service</h2>
					<ul>
						<li>
							<h3 className="dark-header">Queer Tech Utah</h3>
							<h4>Co-organizer</h4>
							<p>Organized social networking events and technology discussions for the LGBTQIA+ developer and tech community in the Salt Lake City, Utah area via meetup. Also chaired a Diversity and Inclusion discussion panel for the Silicon Slopes organization.</p>	
						</li>
						<li>
							<h3 className="dark-header">Denver LGBTQ Tech</h3>
							<h4>Co-organizer</h4>
							<p>Organized social networking events and technology discussions for the LGBTQIA+ developer and tech community in the Denver, Colorado area via meetup.</p>	
						</li>
					</ul>
				</div>
			</div>
			<div>
				<Footer />
			</div>
	</>
)

export default About;
