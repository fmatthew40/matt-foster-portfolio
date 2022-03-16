// import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import About from './components/About'
import Nav from './components/Navigation'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
