// import React, { useState } from 'react';
import React, { useEffect } from 'react';


function Nav(props) {

  const {
    setCurrentSection,
    currentSection, 
  } = props;

  // useEffect(() => {
  //   document.title = (currentCategory.name);
  // }, [currentCategory]);

  return (
    <header className="flex- px-1">
        <h2>
          <a href="/">
            <span>Matthew Foster</span>
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
          <li className={`mx-2`}>
              <a href="#about"
                className={`${currentSection === 'About' && 'navActive'}`}
                onClick={() => {setCurrentSection("About")}}>About</a>
            </li>
            <li className={`mx-2`}>
              <a href="#contact"
                className={`${currentSection === 'Contact' && 'navActive'}`}
                onClick={() => {setCurrentSection("Contact")}}>Contact</a>
            </li>
            <li className={`mx-2`}>
              <a href="#portfolio"
               className={`${currentSection === 'Portfolio' && 'navActive'}`}
               onClick={() => {setCurrentSection("Portfolio")}}>Portfolio</a>
            </li>

            <li className={`mx-2`}>
              <a href="#resume"
                className={`${currentSection === 'Resume' && 'navActive'}`}
                onClick={() => {setCurrentSection("Resume")}}>Resume</a>
            </li>

            {/* {categories.map((category) => (
              <li className={`mx-1  
              ${currentCategory.name === category.name && !contactSelected && 'navActive'
            }`}
              key={category.name} >
                { <span onClick={() => { 
                  setCurrentCategory(category)}}
                  // handleClick(); }}
                  >
                 {(category.name)}
                </span> }

               <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {(category.name)}
                
              </span>
              </li>
            ))
          } */}
        </ul>


        </nav>
    </header>
  );
}

export default Nav; 