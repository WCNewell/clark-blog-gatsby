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
							<li>Built with
								<a className="extlink" aria-label="gatsby" href="https://gatsbyjs.com"> Gatsby, </a>
									a frontend framework based on the opensource 
								<a className="extlink" aria-label="react" href="https://reactjs.org"> React </a>
								library</li>
							<li>Frontend hosted by
								<a className="extlink" aria-label="netlify" href="https://netlify.com"> Netlify </a>
									with CI/CD (Continuous Integration and Continuous Deployement) via Github commits</li>
							<li>Custom backend and CMS (Content Management Studio) built with 
								<a className="extlink" aria-label="sanity" href="https://sanity.io"> Sanity.io</a>
							</li>
							<li>
								<a className="extlink" aria-label="graph q l" href="https://graphql.org">GraphQL </a>
								is implemented to traverse the Gatsby and Sanity APIs</li>
							<li>
								<a className="extlink" aria-label="sass" href="https://sass-lang.com">Sass </a>and 
								<a className="extlink" aria-label="styled components" href="https://styled-components.com"> Styled Components </a>
								are implemented for CSS styling</li>
							<li>Light and dark mode is implemented with state management via Gatsby and React hooks and the 
								<a className="extlink" aria-label="use dark mode" href="https://www.npmjs.com/package/use-dark-mode"> useDarkMode </a>
								plugin
							</li>
							<li>Accessbility audit performed with
								<a className="extlink" aria-label="wave" href="https://wave.webaim.org/"> WAVE </a>
								(Website Accessbility Evaluation Tool)
							</li>
							<li>Original logo design and original blog content</li>
						</ul>
						<p>Further Iterations will present the following features: a stateful contact form, sorting of blog posts by categories, and more advanced Sassy CSS.</p>
						
										{/* Clark's Slices */}
						<a aria-label="clarks slices" href='https://clarks-slices.netlify.app/'>
							<ProjectLink>Clark's Slices</ProjectLink>
						</a>
						<RepoLinkButton>	
						<a aria-label="github" href='https://github.com/WCNewell/master-gatsby'>
							<Github className='portfolio-icon' alt='github icon' />
							<p>View the code on Github</p>
							</a>
						</RepoLinkButton>
						<p>Completed the entire Master-Gatsby course from Wes Bos and this is the resulting demo.</p>
						
										{/* Max Hamburger */}
						<a aria-label="max hamburger" href='https://wcnewell.github.io/max-hamburger/'>
							<ProjectLink>Max Hamburger</ProjectLink>
						</a>
						<RepoLinkButton>	
						<a aria-label="github" href='https://github.com/WCNewell/max-hamburger'>
							<Github className='portfolio-icon' alt='github icon' />
							<p>View the code on Github</p>
						</a>
						</RepoLinkButton>
						<p>Completed the entire Udemy React course from Maximilian Schwarzmueller and this is the resulting demo.</p>
						
										{/* Vuetiful Goals */}
						<a aria-label="vuetiful goals" href='https://vuetiful-goals.firebaseapp.com/#/goals'>
							<ProjectLink>Vuetiful Goals</ProjectLink>
						</a>
						<RepoLinkButton>	
						<a aria-label="github" href='https://github.com/WCNewell/VuetifulGoals-client'>
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
