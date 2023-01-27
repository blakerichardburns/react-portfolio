import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {

const [currentPage, setCurrentPage] = useState('About')
const renderPage = () => {
  switch(currentPage) {
    case 'About':
      return <AboutMe />
    case 'Portfolio':
      return <Portfolio />
    case 'Contact':
      return <Contact />
    case 'Resume':
      return <Resume />
    default:
      return <AboutMe />
  }
}

const handlePageChange = (page) => setCurrentPage (page)

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
