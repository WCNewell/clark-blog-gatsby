import React from 'react';

import LinkedIn from '../assets/linkedin.inline.svg';
import Github from '../assets/github.inline.svg';
import Twitter from '../assets/twitter.inline.svg';
import Instagram from '../assets/instagram.inline.svg';

const Footer = () => {
  return (
      <>
        <div className='footer'>
            <h5 className='footer-text'>
                © {new Date().getFullYear()} Clark Newell, Built with
                {` `}
                <a className="footer-link" href="https://www.gatsbyjs.org">Gatsby</a>
            </h5>
            <a href='https://linkedin.com/in/william-clark-newell/' alt="link to linkedin profile">
                <LinkedIn className='social-icons' alt='linkedin icon'/>
            </a>
            <a href='https://github.com/WCNewell' alt="link to github profile">
                <Github className='social-icons' alt='github icon'/>
            </a>
            <a href='https://instagram.com/willcnewell/' alt="link to instagram profile">
                <Instagram className='social-icons' alt='instagram icon'/>
            </a>
            <a href='https://twitter.com/WCNewell' alt="link to twitter profile">
                <Twitter className='social-icons' alt='twitter icon'/>
            </a>
        </div>
      </>
  );
}

export default Footer;