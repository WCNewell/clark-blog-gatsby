import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const ClarkAlyeska = () => {
  return <StaticImage src='../images/ClarkAlyeska.jpg' alt="Clark Newell at Alyeska Ski Resort" />
}

const About = () => (
	<>  
		<Seo title='About' />
				<div>
					<h1>About</h1>
					<ClarkAlyeska />
					<div>
						<p>Customer service manager, web developer, outdoorsman and pop culture entusist.</p>
						
						<h2>Highlighted Experience</h2>
						<ul>
							<li>
								<h3>Smith's Marketplace - Customer Service Manager</h3>
								<p>Sept 2018 - Current</p>
								<p>Things I do</p>	
							</li>
							<li>
								<h3>Red Pepper Software - Software Development Intern</h3>
								<p>Jan 2019 - Nov 2019</p>
								<p>Things I do</p>	
							</li>
							<li>
								<h3>Flynn Restaurant Group - Applebee's Assistant Manager</h3>
								<p>Jan 2016 - Nov 2016</p>
								<p>Things I do</p>	
							</li>
							<li>
								<h3>Great West Financial - Account Administrator</h3>
								<p>Aug 2014 - Jul 2015</p>
								<p>Things I do</p>
							</li>	
							<li>
								<h3>University of Utah - Administrative Assistant</h3>
								<p>Dec 2007 - Jul 2014</p>
								<p>Things I do</p>	
							</li>
						</ul>
						<h2>Education</h2>
						<ul>
							<li>
								<h3>Galvanize</h3>
								<h4>Web Development Immersive Certificate</h4>
								<p>Things I do</p>	
							</li>
							<li>
								<h3>University of Utah</h3>
								<h4>Bachelor of Arts in Music</h4>
								<p>Things I do</p>	
							</li>
						</ul>
						<h2>Service</h2>
						<ul>
							<li>
								<h3>Denver LGBTQ Tech</h3>
								<h4>Co-organizer</h4>
								<p>Things I do</p>	
							</li>
							<li>
								<h3>Queer Tech Utah</h3>
								<h4>Co-organizer</h4>
								<p>Things I do</p>	
							</li>
						</ul>
					</div>
				</div>
	</>
)

export default About;
