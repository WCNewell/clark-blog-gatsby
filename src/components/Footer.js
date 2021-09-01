import React from 'react';

import LinkedIn from '../assets/linkedin.inline.svg';
import Github from '../assets/github.inline.svg';
import Twitter from '../assets/twitter.inline.svg';
import Instagram from '../assets/instagram.inline.svg';

const Footer = () => {
  return (
      <>
        <div className='footer'>
            <h3 className='footer-text'>
                © {new Date().getFullYear()} Clark Newell, Built with
                {` `}
                <a className="footer-link" aria-label="gatsby" href="https://www.gatsbyjs.org">Gatsby</a>
            </h3>
            <a href='https://linkedin.com/in/william-clark-newell/' aria-label="linked in">
                <LinkedIn className='social-icons' alt='linked in icon'/>
            </a>
            <a href='https://github.com/WCNewell' aria-label="github">
                <Github className='social-icons' alt='github icon'/>
            </a>
            <a href='https://instagram.com/willcnewell/' aria-label="instagram">
                <Instagram className='social-icons' alt='instagram icon'/>
            </a>
            <a href='https://twitter.com/WCNewell' aria-label="twitter">
                <Twitter className='social-icons' alt='twitter icon'/>
            </a>
        </div>
      </>
  );
}

export default Footer;