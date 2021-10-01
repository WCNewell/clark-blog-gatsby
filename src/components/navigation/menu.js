import React from 'react';
import { navigate } from 'gatsby';
import { bool } from 'prop-types';
import styled from 'styled-components';
import '../../styles/global-styles.scss';

import LinkedIn from '../../assets/linkedin.inline.svg';
import Github from '../../assets/github.inline.svg';
import Twitter from '../../assets/twitter.inline.svg';
import Instagram from '../../assets/instagram.inline.svg';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a
        className='menu-item'
        href="/"
        tabIndex={tabIndex}
        onClick={() => {
          isHidden === true && navigate()
        }}>
          <span aria-hidden="true"></span>
            <h2>home</h2>
      </a>
      <a
        className='menu-item'
        href="/about"
        tabIndex={tabIndex}
        onClick={() => {
          isHidden === true && navigate()
        }}>
          <span aria-hidden="true"></span>
            <h2>about</h2>
      </a>
      <a
        className='menu-item'
        href="/portfolio"
        tabIndex={tabIndex}
        onClick={() => {
          isHidden === true && navigate()
        }}>
          <span aria-hidden="true"></span>
            <h2>portfolio</h2>
      </a>
      <a
        className='menu-item'
        href="/posts"
        tabIndex={tabIndex}
        onClick={() => {
          isHidden === true && navigate()
        }}>
          <span aria-hidden="true"></span>
              <h2>tech blog</h2>
      </a>
      <a
        className='menu-item'
        href="/contact"
        tabIndex={tabIndex}
        onClick={() => {
          isHidden === true && navigate()
        }}>
          <span aria-hidden="true"></span>
              <h2>contact</h2>
      </a>
      <div className="menu-icons">
        <a aria-label="linked in" href='https://linkedin.com/in/william-clark-newell/'>
            <LinkedIn className='menu-icons' alt='linked in icon'/>
        </a>
        <a aria-label="github" href='https://github.com/WCNewell'>
            <Github className='menu-icons' alt='github icon'/>
        </a>
        <a aria-label="instagram" href='https://instagram.com/willcnewell/'>
            <Instagram className='menu-icons' alt='instagram icon'/>
        </a>
        <a aria-label="twitter" href='https://twitter.com/WCNewell'>
            <Twitter className='menu-icons' alt='twitter icon'/>
        </a>
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
    right: -275px;
    background-color: #effffa;
    color:  #0b0111;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(-175%)' : 'translateX(0)'};

    a {
        font-size: 2rem;
        padding: 2rem 0;
        outline: none;
        text-decoration: none;
        transition: color 0.3s linear;
    }
`;