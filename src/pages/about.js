import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const ClarkAlyeska = () => {
  return (
		<StaticImage
			src='../images/ClarkAlyeska.jpg'
			className="image"
			alt="Clark Newell at Alyeska Ski Resort"
			placeholder="blurred"
		/>
	)
}

const About = () => (
	<>  
		<Seo title='About' />
				<div>
					<h1>about</h1>
					<ClarkAlyeska />
					<div>
						<p className="caption">Hello World! I'm a Customer service manager, web developer, outdoorsman and pop culture enthusist. Photo of me on the Alyeska ski resort headwall while previewing the Cirque Series 2021 race course by Robyn Newell, July 2021.</p>
						<h2>Goal</h2>
						<p>To represent your software company in marketing, sales, support, implementation, quality analysis, product management and development as my skills continue to grow.</p>
						<h2>Highlighted Experience</h2>
						<ul>
							<li>
								<h3 className="dark-header">Smith's Marketplace - Customer Service Manager</h3>
								<p>Sept 2018 - Current</p>
								<p>Responsible for supervising a 170,000 sq. ft. superstore in store directors' absence, with focus on speed, reliability, friendliness, and cleanliness at checkout, self-checkout, and guest money services. Supervise and direct front-end employee activities and protect substantial cash assets. Ensure maintenance and operability of check-out technology including self-checkout robots and cash recycler. Also trained in grocery inventory ordering and stocking as well as selection and curbside delivery of online pickup orders using wireless handheld devices and software designed by or for Kroger Technology.</p>	
							</li>
							<li>
								<h3 className="dark-header">Red Pepper Software - Software Development Intern</h3>
								<p>Jan 2019 - Nov 2019</p>
								<p>The mantra at Red Pepper is that you are an efficient problem solver, no matter what tech-stack or programming language gets thrown at you. Using Jira as the productivity tool inline with scrum methodology and agile workflow, assist team with QA, pair programming, code review and full stack coding assignments building proprietary software for multiple clients. Simultaneously managing multiple tickets on strict tempo timers, switch between multiple tech stacks and languages throughout the day. Become proficient in frontend web and mobile development using HTML, CSS, Sass, JavaScript, TypeScript, PHP,  Razor, Xamarin.iOS, JS frameworks such as AngularJS and Angular using VS Code, customize templates on e-commerce platforms such as Shopify and blog-sites such as WordPress and Magento, and interfacing with CRM APIs such as Zoho. Become proficient in full stack and backend development using C#, ASP.NET, Entity framework and SQL using Visual Studio and SSMS. Also conduct lunch and learns and speed training sessions for company staff.</p>	
							</li>
							<li>
								<h3 className="dark-header">Flynn Restaurant Group - Applebee's Assistant Manager</h3>
								<p>Jan 2016 - Nov 2016</p>
								<p>Trained to oversee every aspect of a full service casual dining restaurant. Singlehandedly ran the restaurant while supervising up to 30 people per shift. Included learning, and performing with proficiency, every single position in the front and back of house such as hosting, serving, bartending, bussing, cooking, dish washing, cleaning and building/grounds maintenance. Managerial duties included daily/weekly food and beverage inventory, supply orders, unloading trucks, interviewing, hiring, training, disciplinary actions, terminations, and promoting special marketing events within the restaurant and surrounding neighborhood.</p>	
							</li>
							<li>
								<h3 className="dark-header">Great West Financial - Account Administrator</h3>
								<p>Aug 2014 - Jul 2015</p>
								<p>As part of the cash processing team, provided expeditious and accurate distribution of retirement contributions for various retirement plans and their participants. Monitored, researched, adjusted and cleared outstanding items in all suspense accounts. Trained to become a subject matter expert in IRA direct rollovers and plan-to-plan transfers. Upmost integrity and confidentiality was required due to regular access to highly sensitive information.</p>
							</li>	
							<li>
								<h3 className="dark-header">University of Utah - Administrative Assistant</h3>
								<p>Dec 2007 - Jul 2014</p>
								<p>Former Assistant to the Director of the Center for Engineering Innovation in the Dept. of Electrical & Computer Engineering and Nanotechnology Institute of Utah. Coordinated the design and development of websites and social media for the center. Provided support to research faculty, visiting scholars, guest speakers and staff by arranging meetings, travel and travel reimbursements. Organized and managed special events and conferences including venue selection, catering, promotion, sponsorship, media materials and event set-up and supervision. Coordinated the design of marketing materials and drafted correspondence. Certified by the Research Administration Training Series to oversee proposal preparation and post-award management of grants and contracts. In charge of hiring, training and supervising office staff. Coordinated project and customer resource management using CRM tools such as Pipedrive and Zoho.</p>	
							</li>
						</ul>
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
	</>
)

export default About;
