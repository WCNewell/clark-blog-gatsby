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
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </h5>
            <a href='https://linkedin.com/in/william-clark-newell/'>
                <LinkedIn className='social-icons' alt='linkedin icon'/>
            </a>
            <a href='https://github.com/WCNewell'>
                <Github className='social-icons' alt='github icon'/>
            </a>
            <a href='https://instagram.com/willcnewell/'>
                <Instagram className='social-icons' alt='instagram icon'/>
            </a>
            <a href='https://twitter.com/WCNewell'>
                <Twitter className='social-icons' alt='twitter icon'/>
            </a>
        </div>
      </>
  );
}

export default Footer;