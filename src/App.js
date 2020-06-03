import React from 'react';
import './App.css';
import Socialblok from './components/socialblok.js';

function App() {
  return (
    <div className="inhoud">
      <div className="titel">
        <h1>Nick Spaargaren</h1>
        <h2>Designer & Front-End Developer</h2>
      </div>
      <Socialblok platform="github" link="https://github.com/nickspaargaren" />
      <Socialblok platform="linkedin" link="https://www.linkedin.com/in/nickspaargaren" />
      <Socialblok platform="dribbble" link="https://dribbble.com/nickspaargaren" />
    </div>
  );
}

export default App;