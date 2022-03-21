import React, { useState } from 'react'; 
import './App.css';
import About from './components/About'
import Nav from './components/Navigation'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
    const sections = ["About", "Contact", "Portfolio", "Resume"];
    const [currentSection, setCurrentSection] = useState(sections[0]);

  const renderView = () => {
    switch (currentSection) {
      case "About":
        return <About/>
      case "Contact":
        return <Contact/>
      case "Portfolio":
        return <Project/>
      case "Resume":
        return <Resume/>
      default:
        return <About />
    }
  }

  return (
    <div>
      <Nav
       setCurrentSection={setCurrentSection}
       currentSection={currentSection}
      ></Nav>
      <main>
      {renderView()}
      </main>
      <footer><Footer></Footer></footer>
    </div>
  );
}

export default App;