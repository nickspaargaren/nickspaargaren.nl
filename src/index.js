import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Socialblok from './components/socialblok.js';

function App() {
  return (
    <div className="inhoud">
      <div className="titel">
        <h1>Nick Spaargaren</h1>
        <h2>Designer & Front-End Developer</h2>
      </div>
      <Socialblok platform="dribbble" link="https://dribbble.com/nickspaargaren" />
      <Socialblok platform="github" link="https://github.com/nickspaargaren" />
      <Socialblok platform="youtube" link="https://www.youtube.com/watch?v=zDiSkH9PPJg&list=PLrZcPERRIctdZztCmNMHQ11aOne2yYOX3" />
      <Socialblok platform="linkedin" link="https://www.linkedin.com/in/nickspaargaren" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
serviceWorker.register();
