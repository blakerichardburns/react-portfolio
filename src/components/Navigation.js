import React from "react";

const styles = {
  navigation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: "1rem",
    listStyle: "none",
  },
  navItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={styles.navigation}>
      <li className="nav-item" style={styles.navItem}>
        <a
          href="#About"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item" style={styles.navItem}>
        <a
          href="#Portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item" style={styles.navItem}>
        <a
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
      <li className="nav-item" style={styles.navItem}>
        <a
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
