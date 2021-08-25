import React from 'react';
import { navigate } from 'gatsby'
import { bool } from 'prop-types'
import styled from 'styled-components'
import '../../styles/global-styles.scss'

const Menu = ({ open, ...props }) => {
  
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
    
    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <a className='menu-item' href="/" tabIndex={tabIndex} onClick={isHidden === true && navigate()}>
                <span aria-hidden="true"></span>
                    <h3>home</h3>
            </a>
            <a className='menu-item' href="/about" tabIndex={tabIndex} onClick={isHidden === true && navigate()}>
                <span aria-hidden="true"></span>
                <h3>about</h3>
            </a>
            <a className='menu-item' href="/portfolio" tabIndex={tabIndex} onClick={isHidden === true && navigate()}>
                <span aria-hidden="true"></span>
                <h3>portfolio</h3>
            </a>
            <a className='menu-item' href="/posts" tabIndex={tabIndex} onClick={isHidden === true && navigate()}>
                <span aria-hidden="true"></span>
                    <h3>tech blog</h3>
            </a>    
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu

export const StyledMenu = styled.nav`
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
`