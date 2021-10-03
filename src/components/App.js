import React from 'react';
import PropTypes from "prop-types";
import useDarkMode from 'use-dark-mode';
import { Link } from 'gatsby';
import Logo from '../assets/clarklogo.inline.svg';
import Nav from './Nav';
import Footer from './Footer';

import StarLayout from './StarLayout';
import styled from 'styled-components';
import '../styles/global-styles.scss';

import SunIcon from '../assets/sun.inline.svg';
import MoonIcon from '../assets/moon.inline.svg';

export const ThemeContext = React.createContext('day');

const Layout = () => {
  const theme = React.useContext(ThemeContext)
    return (
            theme === 'night' ? <StarLayout /> : null
    );
}

const App = ({ children }) => {
  const [theme, setTheme] = React.useState('night');
  const darkMode = useDarkMode(false);

  const toggleTheme = () => {
    theme === darkMode ? setTheme('night') : setTheme('day')
  }
  
  const Header = () => {
      const [isSticky, setSticky] = React.useState(false)
      const ref = React.useRef(null)
      const handleScroll = () => {
          if (ref.current) {
              setSticky(ref.current.getBoundingClientRect().top <= 0)
          }
      }

      React.useEffect(() => {
          window.addEventListener('scroll', handleScroll)

          return () => {
              window.removeEventListener('scroll', () => handleScroll)
          }
      }, []);

      return (
        <>
          <Brand>
              <Link to="/" aria-label="home page">
                  <Logo className='logo' />
              </Link>
              <Name>
                  <h1 className='name'>clark newell</h1>
              </Name>
              <ModeIcons>    
                <SunIcon  className='mode-icon'
                          onClick={() => {
                              toggleTheme()
                              darkMode.disable()
                          }}
                          alt='sun icon for light mode'
                />
                <MoonIcon className='mode-icon' 
                          onClick={() => {
                              toggleTheme()
                              darkMode.enable()
                          }}
                          alt='moon icon for dark star mode'
                />
              </ModeIcons>
              <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                  <div className='sticky-inner'> 
                      <Nav />
                  </div>
              </div>
          </Brand>
        </>
      );
    }

    return (
      <ThemeContext.Provider value={'night'}>
        <>
          <Main>
              <Layout />
              <Header />
              <Content>
                  {children}
              </Content>
          </Main>
          <Footer />    
        </>
      </ThemeContext.Provider>
    );
}

export default App

App.propTypes = {
  children: PropTypes.node.isRequired,
}

const Main = styled.div`
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  padding-bottom: 12rem;
`;

const Brand = styled.div`
  display: grid;  
  grid-area: header;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1 / 5;
  grid-row: 1 / 2;
`;

const Name = styled.div`
    grid-column: 2 / 3;
`;

const ModeIcons = styled.div`
    grid-column: 3 / 4;
    display: flex;
    align-items: flex-start;
`;

const Content = styled.div`
    /* grid-column: 1 / 5;
    grid-row: 3; */
    z-index: 1;
`;
