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
							<h3>Clark Blog</h3>
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
							<li>Frontend hosted by Netlify with CI/CD via Github</li>
							<li>Custom backend and CMS studio built with Sanity.io</li>
							<li>GraphQL to traverse the Gatsby and Sanity APIs.</li>
							<li>Sassy CSS and Styled Components</li>
							<li>Light and dark mode with state management provided by Gatsby and React hooks</li>
							<li>Original logo designed with boxy-svg</li>
							<li>Original blog content</li>
						</ul>
						<p>Further Iterations will present the following features:</p>
						<ul>
							<li>Accessbility audit and adjustments implemented</li>
							<li>Unit testing</li>
							<li>Sorting of blog posts by category</li>
							<li>Advancments in Sassy CSS and Styled-Components</li>
							<li>A separately hosted fitness blog showcasing different styling and original content</li>
						</ul>
										{/* Clark's Slices */}
						<a href='https://clarks-slices.netlify.app/'>
							<h3>Clark's Slices</h3>
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
							<h3>Max Hamburger</h3>
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
							<h3>Vuetiful Goals</h3>
						</a>
						<RepoLinkButton>	
						<a href='https://github.com/WCNewell/VuetifulGoals-client'>
							<Github className='portfolio-icon' alt='github icon' />
							<p>View the code on Github</p>
							</a>
						</RepoLinkButton>
						<p>Very first CRUD application completed while at Galvanize.</p>

					</div>
				</div>
	</>
);

export default Portfolio;

const RepoLinkButton = styled.button`
	display: flex;
	align-content: flex-start;
`;
