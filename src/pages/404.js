import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GatsbyAstronaut = () => {
  return (
    <StaticImage
      src='../images/gatsby-astronaut.png'
      className="astro-image"
      alt="Gatsby Astronaut Logo"
      placeholder="blurred"
    />
  )
};

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <div className="main-grid">
      <Header />
      <div className="content">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness. 😢</p>
      </div>
      <div className="grid-three">
        <GatsbyAstronaut />
        <p className="caption">Hello from the Gatsby Spaceman! Image design by Gatsby.</p>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </>
);

export default NotFoundPage;

