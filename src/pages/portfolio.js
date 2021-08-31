import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
import styled from 'styled-components';

import Github from '../assets/github.inline.svg';

const ClarkWebOne = () => {
  return <StaticImage src='../images/clarknewell_og-homepage.jpg' alt="Original Clark Newell web development website" />
}

const Portfolio = () => (
	<>  
		<Seo title='About' />
				<div>
					<h1>Portfolio</h1>
					<ClarkWebOne />
					<div>
						<p>The first iteration of my personal website was created with an early version of Gatsby and a template from HTML5 UP.</p>
						<h2>Highlighted Projects</h2>
						
											{/* Clark Blog */}
						<a href='/'>
							<ProjectLink>Clark Blog</ProjectLink>
						</a>
						<RepoLinkButton>	
						<a href='https://github.com/WCNewell/clark-blog-gatsby'>
							<Github className='portfolio-icon' alt='github icon' />
							<p>View the code on Github</p>
							</a>
						</RepoLinkButton>
						<p>Version 3.0 of my personal website presents the following features:</p>	
						<ul>
							<li>Built with Gatsby, a frontend framework based on the React library</li>
							<li>Frontend hosted by Netlify with CI/CD (Continuous Integration and Continuous Deployement) via Github commits</li>
							<li>Custom backend and CMS (Content Management) studio built with Sanity.io</li>
							<li>GraphQL is implemented to traverse the Gatsby and Sanity APIs</li>
							<li>Sass and Styled Components are implemented for CSS styling</li>
							<li>Light and dark mode is implemented with state management via Gatsby and React hooks and the useDarkMode plugin</li>
							<li>Original logo design and original blog content</li>
						</ul>
						<p>Further Iterations will present the following features: accessbility audit with adjustments implemented, unit testing, stateful contact form, sorting of blog posts by category, and more advanced Sassy CSS.</p>
						
										{/* Clark's Slices */}
						<a href='https://clarks-slices.netlify.app/'>
							<ProjectLink>Clark's Slices</ProjectLink>
						</a>
						<RepoLinkButton>	
						<a href='https://github.com/WCNewell/master-gatsby'>
							<Github className='portfolio-icon' alt='github icon' />
							<p>View the code on Github</p>
							</a>
						</RepoLinkButton>
						<p>Completed the entire Master-Gatsby course from Wes Bos and this is the resulting demo.</p>
						
										{/* Max Hamburger */}
						<a href='https://wcnewell.github.io/max-hamburger/'>
							<ProjectLink>Max Hamburger</ProjectLink>
						</a>
						<RepoLinkButton>	
						<a href='https://github.com/WCNewell/max-hamburger'>
							<Github className='portfolio-icon' alt='github icon' />
							<p>View the code on Github</p>
						</a>
						</RepoLinkButton>
						<p>Completed the entire Udemy React course from Maximilian Schwarzmueller and this is the resulting demo.</p>
						
										{/* Vuetiful Goals */}
						<a href='https://vuetiful-goals.firebaseapp.com/#/goals'>
							<ProjectLink>Vuetiful Goals</ProjectLink>
						</a>
						<RepoLinkButton>	
						<a href='https://github.com/WCNewell/VuetifulGoals-client'>
							<Github className='portfolio-icon' alt='github icon' />
							<p>View the code on Github</p>
							</a>
						</RepoLinkButton>
						<p>Very first CRUD (Create, Read, Update, Delete) application completed while at Galvanize.</p>

					</div>
				</div>
	</>
);

export default Portfolio;

const ProjectLink = styled.h3`
	text-decoration: underline;
`;

const RepoLinkButton = styled.button`
	display: flex;
	align-content: flex-start;
`;
