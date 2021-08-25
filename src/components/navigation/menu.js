import React from 'react';
import { bool } from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import '../../styles/global-styles.scss'

const Menu = ({ open, ...props }) => {
  
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <Link className='menu-item' to="/" tabIndex={tabIndex} onClick={isHidden === true}>
                <span aria-hidden="true"></span>
                    <h3>home</h3>
            </Link>
            <Link className='menu-item' to="/about" tabIndex={tabIndex} onClick={isHidden === true}>
                <span aria-hidden="true"></span>
                <h3>about</h3>
            </Link>
            <Link className='menu-item' to="/portfolio" tabIndex={tabIndex} onClick={isHidden === true}>
                <span aria-hidden="true"></span>
                <h3>portfolio</h3>
            </Link>
            <Link className='menu-item' to="/blog" tabIndex={tabIndex} onClick={isHidden === true}>
                <span aria-hidden="true"></span>
                    <h3>web blog</h3>
            </Link>    
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