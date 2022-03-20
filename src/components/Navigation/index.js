// import React, { useState } from 'react';
import React, { useEffect } from 'react';


function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory, 
    contactSelected,
    setContactSelected
  
  } = props;

  useEffect(() => {
    document.title = (currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex- px-1">
        <h2>
          <a href="/">
            <span>Matthew Foster</span>
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2" >
              {/* <a href="#about"> */}
              <a href="#about" onClick={() => setContactSelected(false) }>

                 {/* onClick={() => handleClick()}>About Me</a> */}
                 About Me</a>
            </li>
            <li className={`mx-2
           ${contactSelected && 'navActive'}`
          }>
              {/* <span onClick={() => handleClick()}>Contact</span> */}
              {/* <span>Contact</span> */}
              <span onClick={() => setContactSelected(true)}>Contact</span>

            </li>

            {categories.map((category) => (
              <li className={`mx-1  
              ${currentCategory.name === category.name && !contactSelected && 'navActive'
            }`}
              key={category.name} >
                {/* <span onClick={() => { 
                  setCurrentCategory(category)}}
                  // handleClick(); }}
                  >
                 {(category.name)}
                </span> */}

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
          }
        </ul>


        </nav>
    </header>
  );
}

export default Nav; 