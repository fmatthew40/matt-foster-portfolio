import React, { useEffect } from 'react';

function Nav(props) {

  const {
    setCurrentSection,
    currentSection, 
  } = props;

  return (
    <header className="cards">
        <h2>
          <a href="/">
            <span>Matthew Foster</span>
          </a>
        </h2>
        <nav>
          <ul className="navi">
          <li className={`navi`}>
              <a href="#about"
                className={`${currentSection === 'About' && 'navActive'}`}
                onClick={() => {setCurrentSection("About")}}>About</a>
            </li>
            <li className={`navi`}>
              <a href="#contact"
                className={`${currentSection === 'Contact' && 'navActive'}`}
                onClick={() => {setCurrentSection("Contact")}}>Contact</a>
            </li>
            <li className={`navi`}>
              <a href="#portfolio"
               className={`${currentSection === 'Portfolio' && 'navActive'}`}
               onClick={() => {setCurrentSection("Portfolio")}}>Portfolio</a>
            </li>

            <li className={`navi`}>
              <a href="#resume"
                className={`${currentSection === 'Resume' && 'navActive'}`}
                onClick={() => {setCurrentSection("Resume")}}>Resume</a>
            </li>
          </ul>
         </nav>
    </header>
  );
}

export default Nav; 