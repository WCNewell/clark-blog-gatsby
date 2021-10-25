import React from 'react';
import PropTypes from "prop-types";
import Footer from './Footer';

import '../styles/global-styles.scss';
import '../styles/grids.css';
import StarMode from './StarMode';
import PageTransition from 'gatsby-plugin-page-transitions';

export const ThemeContext = React.createContext('day');

const Mode = () => {
  const theme = React.useContext(ThemeContext)
    return (
            theme === 'night' ? <StarMode /> : null
    );
};

const App = ({ children }) => {

    return (
      <ThemeContext.Provider value={'night'}>
        <>
          <PageTransition>
          {/* <Header />     */}
            <Mode />
            <div>
              {children}
            </div>
            <Footer className="footer" />
          </PageTransition>
        </>
      </ThemeContext.Provider>
    );
}

export default App;

App.propTypes = {
  children: PropTypes.node.isRequired,
}

