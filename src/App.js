// // import logo from './logo.svg';
// import React, { useState } from 'react'; 
// import './App.css';
// import About from './components/About'
// import Nav from './components/Navigation'
// import Footer from './components/Footer'
// import Resume from './components/Resume'
// import Project from './components/Project'
// import Contact from './components/Contact'

// function App() {
//   const [categories] = useState([
//     {
//       name: "Portfolio",
//       description: "Collection of work that was created"
//       },
//       {
//       name: "Resume",
//       description: "My resume and list of proficiencies."
//       },
//       {
//       name: "Contact",
//       description: "My contact information."
//       }
//   ]);

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   const [contactSelected, setContactSelected] = useState(false);

//   return (
//     <div>
//       <header>
//       <Nav
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Nav>
//       </header>
//       <main>
//         {!contactSelected ? (
//           <>
//             <About currentCategory={currentCategory}></About>
//           </>
//         ) : (
//             <Resume></Resume>
//           )}
//       </main>
//       <footer>
//         <Footer></Footer>
//       </footer>
//     </div>
//   );
// }



// export default App;











import React, { useState } from 'react'; 
import './App.css';
import About from './components/About'
import Nav from './components/Navigation'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
    const [categories] = useState([
      {
        name: "Portfolio",
        description: "Collection of work that was created"
        },
        {
        name: "Resume",
        description: "My resume and list of proficiencies."
        }
    ]);
    const [contactSelected, setContactSelected] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
       categories={categories}
       setCurrentCategory={setCurrentCategory}
       currentCategory={currentCategory}
       contactSelected={contactSelected}
       setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {/* <Resume>`{currentCategory}`</Resume> */}

        <div>
        {!contactSelected ? (
  <>
    <About currentCategory={currentCategory}></About>
    {/* <Resume currentCategory={currentCategory}></Resume> */}
  </>
) : (
    <Contact></Contact>

  )}

        </div>
        <div>
          <Project></Project>
        </div>
        <div>
          <Resume></Resume>
        </div>

      </main>
      <footer><Footer></Footer></footer>
    </div>
  );
}

export default App;