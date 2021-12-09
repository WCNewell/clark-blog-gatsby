import React from 'react';
import { navigate } from 'gatsby';
import { bool } from 'prop-types';
import styled from 'styled-components';

import LinkedIn from '../../assets/linkedin.inline.svg';
import Github from '../../assets/github.inline.svg';
// import Twitter from '../../assets/twitter.inline.svg';
// import Instagram from '../../assets/instagram.inline.svg';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a
        href="/"
        tabIndex={tabIndex}
        onClick={() => {
          isHidden === true && navigate("/")
        }}>
          <span aria-hidden="true"></span>
            <h3>home</h3>
      </a>
      <a
        href="/about"
        tabIndex={tabIndex}
        onClick={() => {
          isHidden === true && navigate("/about")
        }}>
          <span aria-hidden="true"></span>
            <h3>about</h3>
      </a>
      <a
        href="/portfolio"
        tabIndex={tabIndex}
        onClick={() => {
          isHidden === true && navigate("/portfolio")
        }}>
          <span aria-hidden="true"></span>
            <h3>portfolio</h3>
      </a>
      <a
        href="/blog"
        tabIndex={tabIndex}
        onClick={() => {
          isHidden === true && navigate("/blog")
        }}>
          <span aria-hidden="true"></span>
              <h3>blog</h3>
      </a>
      <a
        href="/contact"
        tabIndex={tabIndex}
        onClick={() => {
          isHidden === true && navigate("/contact")
        }}>
          <span aria-hidden="true"></span>
              <h3>contact</h3>
      </a>
      <div className="menu-icons">
        <a aria-label="linked in" href='https://linkedin.com/in/william-clark-newell/'>
            <LinkedIn className='menu-icons' alt='linked in icon'/>
        </a>
        <a aria-label="github" href='https://github.com/WCNewell'>
            <Github className='menu-icons' alt='github icon'/>
        </a>
        {/* <a aria-label="instagram" href='https://instagram.com/willcnewell/'>
            <Instagram className='menu-icons' alt='instagram icon'/>
        </a>
        <a aria-label="twitter" href='https://twitter.com/WCNewell'>
            <Twitter className='menu-icons' alt='twitter icon'/>
        </a> */}
      </div>    
    </StyledMenu>
  );
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  right: -300px;
  background-color: #fafafa;
  color:  #0b0111;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(-175%)' : 'translateX(0)'};
`;