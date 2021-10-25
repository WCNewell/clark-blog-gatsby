import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Header from '../components/Header';
import Seo from '../components/seo';

import Github from '../assets/github.inline.svg';

const ClarkWebOne = () => {
  return ( 
		<StaticImage
			src='../images/clarknewell_og-homepage.jpg'
			className="image"
			alt="Original Clark Newell web development website"
		/>
	)
}

const Portfolio = () => (
	<>  
		<Seo title='About' />
				<div className="main-grid">
					<Header />
					<h1 className="page-title">portfolio</h1>
					<div className="content">
						<ClarkWebOne />
						<div>
							<p className="caption">The first iteration of my personal website was created with an early version of Gatsby and a template from HTML5 UP.</p>
							<h2>Highlighted Projects</h2>
							
												{/* Clark Blog */}
							<a href='/'>
								<h3>Clark Blog</h3>
							</a>
							<p>Version 3.0 of my personal website presents the following features:</p>	
							<ul>
								<li>Built with
									<a className="dark-link" aria-label="gatsby" href="https://gatsbyjs.com"> Gatsby, </a>
										a frontend framework based on the opensource 
									<a className="dark-link" aria-label="react" href="https://reactjs.org"> React </a>
									library. This UI stems from the default starter</li>
								<li>Frontend hosted by
									<a className="dark-link" aria-label="netlify" href="https://netlify.com"> Netlify </a>
										with CI/CD (Continuous Integration and Continuous Deployment) via Github commits. Netlify also provides the honeypot and data transfer for the contact form</li>
								<li>Custom backend and CMS (Content Management Studio) built with and hosted by
									<a className="dark-link" aria-label="sanity" href="https://sanity.io"> Sanity.io</a>
								</li>
								<li>
									<a className="dark-link" aria-label="graph q l" href="https://graphql.org">GraphQL </a>
									is implemented to traverse the Gatsby and Sanity APIs</li>
								<li>
									<a className="dark-link" aria-label="sass" href="https://sass-lang.com">Sass, </a> 
									<a className="dark-link" aria-label="styled components" href="https://styled-components.com"> Styled Components, </a>
									<a className="dark-link" aria-label="typography.js" href="https://kyleamathews.github.io/typography.js/"> Typography.js, </a> 
									and Grid are implemented for CSS styling</li>
								<li>Light and dark "star" modes are implemented with state management via React hooks and the 
									<a className="dark-link" aria-label="use dark mode" href="https://www.npmjs.com/package/use-dark-mode"> useDarkMode </a>
									plugin
								</li>
								<li>Unit testing created with
									<a className="dark-link" aria-label="jest" href="https://jestjs.io/"> Jest </a>
								</li>
								<li>Accessbility audit performed with
									<a className="dark-link" aria-label="wave" href="https://wave.webaim.org/"> WAVE </a>
								</li>
								<li>Original logo design and original blog content</li>
							</ul>
							<p>Further Iterations will present some of the following features: a stateful contact form, sorting of blog posts by further categories, and more advanced Sassy CSS.</p>
							<button className="repo-link">	
							<a href='https://github.com/WCNewell/clark-blog-gatsby'>
								<Github className='portfolio-icon' alt='github icon' />
									<p>View the code on Github</p>
								</a>
							</button>
											{/* Clark's Slices */}
							<a aria-label="clarks slices" href='https://clarks-slices.netlify.app/'>
								<h3>Clark's Slices</h3>
							</a>
							<p>Completed the entire Master-Gatsby course from Wes Bos and this is the resulting demo.</p>
							<button className="repo-link">	
							<a aria-label="github" href='https://github.com/WCNewell/master-gatsby'>
								<Github className='portfolio-icon' alt='github icon' />
									<p>View the code on Github</p>
								</a>
							</button>
											{/* Max Hamburger */}
							<a aria-label="max hamburger" href='https://wcnewell.github.io/max-hamburger/'>
								<h3>Max Hamburger</h3>
							</a>
							<p>Completed the entire Udemy React course from Maximilian Schwarzmueller and this is the resulting demo.</p>
							<button className="repo-link">	
							<a aria-label="github" href='https://github.com/WCNewell/max-hamburger'>
								<Github className='portfolio-icon' alt='github icon' />
									<p>View the code on Github</p>
							</a>
							</button>
											{/* Vuetiful Goals */}
							<a aria-label="vuetiful goals" href='https://vuetiful-goals.firebaseapp.com/#/goals'>
								<h3>Vuetiful Goals</h3>
							</a>
							<p>Very first CRUD (Create, Read, Update, Delete) application completed while at Galvanize using Vue.js.</p>
							<button className="repo-link">	
							<a aria-label="github" href='https://github.com/WCNewell/VuetifulGoals-client'>
								<Github className='portfolio-icon' alt='github icon' />
									<p>View the code on Github</p>
								</a>
							</button>
						</div>
					</div>
				</div>
	</>
);

export default Portfolio;
