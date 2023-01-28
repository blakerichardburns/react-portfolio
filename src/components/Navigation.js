import React from 'react';

const styles = {
  navigation: {
    paddingRight: '2.5rem',
    fontSize: '2.5rem',
  },
  navItem: {

  },
};

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={styles.navigation}>
      <li className="nav-item" style={styles.navItem}>
        <a
          href="#About"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item" style={styles.navItem}>
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={
            currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item" style={styles.navItem}>
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item" style={styles.navItem}>
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
