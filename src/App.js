// import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import About from './components/About'
import Nav from './components/Navigation'
import Footer from './components/Footer'
import Resume from './components/Resume'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Resume></Resume>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
