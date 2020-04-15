import React from 'react';
import './App.css';

function App() {
  return (
    <div className="inhoud">
      <div className="titel">
        <h1>Nick Spaargaren</h1>
        <h2>Designer & Front-End Developer</h2>
      </div>
      <a href="https://github.com/nickspaargaren" target="_blank" className="github" rel="noopener noreferrer"><i className="fab fa-github"></i><span><strong>Github</strong>Nick Spaargaren</span></a>
      <a href="https://www.linkedin.com/in/nickspaargaren" target="_blank" className="linkedin" rel="noopener noreferrer"><i className="fab fa-linkedin"></i><span><strong>Linkedin</strong>Nick Spaargaren</span></a>
      <a href="https://dribbble.com/nickspaargaren" target="_blank" className="dribbble" rel="noopener noreferrer"><i className="fab fa-dribbble"></i><span><strong>Dribbble</strong>Nick Spaargaren</span></a>
    </div>
  );
}

export default App;