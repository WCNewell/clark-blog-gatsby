import React from 'react';
import PropTypes from "prop-types";

import '../styles/global-styles.scss';
import '../styles/grids.css';
import StarMode from './StarMode';

export const ThemeContext = React.createContext('day');

const Mode = () => {
  const theme = React.useContext(ThemeContext)
    return (
      theme === 'night' ? <StarMode /> : null
    );
}

const App = ({ children }) => {

  return (
    <ThemeContext.Provider value={'night'}>
      <>
        <Mode />
        <div>
          {children}
        </div>
      </>
    </ThemeContext.Provider>
  );
}

export default App;

App.propTypes = {
  children: PropTypes.node.isRequired,
}

