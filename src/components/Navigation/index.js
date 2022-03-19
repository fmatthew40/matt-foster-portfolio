
// import React from 'react';

// function Nav(props) {
//   const {
//     categories = [],
//     setCurrentCategory,
//     contactSelected,
//     currentCategory,
//     setContactSelected,
//   } = props;

//     const { currentTab, setCurrentTab } = props;
  
//     return (
//       <nav>
//         <ul className="flex-row mobile-view">
//           <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
//             <span onClick={() => setCurrentTab("about")}>About Me</span>
//           </li>
//           <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
//             <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
//           </li>
//           <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
//             <span onClick={() => setCurrentTab("contact")}>Contact</span>
//           </li>
//           <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
//             <span onClick={() => setCurrentTab("resume")}>Resume</span>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
  

// export default Nav;




// return (
//   <header className="flex-row px-1">
//     <h2>
//       <a data-testid="link" href="/">
//         <span role="img" aria-label="camera"> 📸</span> Matthew Foster
//       </a>
//     </h2>
//     <nav>
//       <ul className="flex-row">
//         <li className="mx-2">
//           <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
//             About me
//           </a>
//         </li>
//         <li className={`mx-2 ${contactSelected && 'navActive'}`}>
//           <span onClick={() => setContactSelected(true)}>Contact</span>
//         </li>
//         {categories.map((category) => (
//           <li
//             className={`mx-1 ${
//               currentCategory.name === category.name && !contactSelected && 'navActive'
//               }`}
//             key={category.name}
//           >
//             <span
//               onClick={() => {
//                 setCurrentCategory(category);
//                 setContactSelected(false);
//               }}
//             >
//             </span>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   </header>
// );
// }





import React from 'react';

function Nav() {
  const categories = [
    {
    name: "Portfolio",
    description: "Collection of work that was created"
    },
    {
    name: "Resume",
    description: "My resume and list of proficiencies."
    },
    {
    name: "Contact",
    description: "My contact information."
    }
  ];


  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <header className="flex-row px-1">
        <h2>
          <a href="/">
            <span>Matthew Foster</span>
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#about" onClick={() => handleClick()}>About Me</a>
            </li>
            <li className={"mx-2"}>
              <span onClick={() => handleClick()}>Contact</span>
            </li>

            {/* <li className="mx-2">
              <a href="#contact">Contact</a>
            </li> */}

            {/* <li className="mx-2">
              <a href="#project">Portfolio</a>
            </li>

            <li className="mx-2">
              <a href="#resume">Resume</a>
            </li> */}

{
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
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