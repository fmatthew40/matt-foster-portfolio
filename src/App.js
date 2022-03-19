// import logo from './logo.svg';
import React, { useState } from 'react'; 
import './App.css';
import About from './components/About'
import Nav from './components/Navigation'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contact'

// function App() {
//   const [categories] = useState([]);
//   const [currentCategory, setCurrentCategory] = useState(categories[0]);


//   return (
//     <div>
//       <Nav
//       // categories={categories}
//       //   setCurrentCategory={setCurrentCategory}
//       //   currentCategory={currentCategory}
//       ></Nav>
//       <main>
//         <About></About>
//         <Resume></Resume>
//       </main>
//       <footer>
//         <Footer></Footer>
//       </footer>
//     </div>
//   );
// }


function App() {
  const [categories] = useState([
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </header>
      <main>
        {!contactSelected ? (
          <>
            <About currentCategory={currentCategory}></About>
          </>
        ) : (
            <Resume></Resume>
          )}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}



export default App;
