// import React, {useState} from 'react';

// function Nav() {
//     // const [categories] = useState([]) 
//     // const [currentCategory, setCurrentCategory] = useState(categories[0]);

//     return(
//         <header>
//             <h2>
//                 <a href="/">
//                     <span role="img" aria-label="sparkles">✨</span>Matthew Foster
//                 </a>
//             </h2>
//             <nav>
//                 <ul className="flexrow">
//                     <li className="mx-2">
//                         <a href="#about">
//                             About Me
//                         </a>
//                         </li>
//                         <li>
//                             <span>Portfolio</span>
//                         </li>
//                         <li className="mx-2">
//                             <span>Contact</span>
//                         </li>
//                         <li>
//                             <span>Resume</span>
//                         </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Nav;





import React from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {/* {capitalizeFirstLetter(category.name)} */}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;