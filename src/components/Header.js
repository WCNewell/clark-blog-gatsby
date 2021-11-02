import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Link } from 'gatsby';
import Logo from '../assets/clarklogo.inline.svg';
import Nav from './Nav';

import SunIcon from '../assets/sun.inline.svg';
import MoonIcon from '../assets/moon.inline.svg';

const Header = () => {
  const [theme, setTheme] = React.useState('night');
  const darkMode = useDarkMode(false);

  const toggleTheme = () => {
    theme === darkMode ? setTheme('night') : setTheme('day')
  }
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
      <div className="logo-grid">
        <Link to="/" aria-label="home page">
            <Logo className="logo" />
        </Link>
      </div>
      <div className="name-grid">
        <h2 className="name">
          clark newell
        </h2>
      </div>
      <div className="sun-grid">    
        <SunIcon  className="mode-icon"
                  onClick={() => {
                      toggleTheme()
                      darkMode.disable()
                  }}
                  alt='sun icon for light mode'
        />
      </div>
      <div className="moon-grid">
        <MoonIcon className="mode-icon" 
                  onClick={() => {
                      toggleTheme()
                      darkMode.enable()
                  }}
                  alt='moon icon for dark star mode'
        />
      </div>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
          <div className='sticky-inner'> 
            <div>
              <Nav />
            </div>
          </div>
      </div>
    </>
  );
}

export default Header;