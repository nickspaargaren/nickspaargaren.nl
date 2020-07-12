import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
const Socialblok = React.lazy(() => import('./components/socialblok')); 

function App() {
  return (
  <div className="inhoud">
      <div className="titel">
        <h1>Nick Spaargaren</h1>
        <h2>Designer & Front-End Developer</h2>
      </div>
      <Suspense fallback={<div>Laden...</div>}>
        <div className="socialmedia">
          <Socialblok platform="dribbble" link="https://dribbble.com/nickspaargaren" />
          <Socialblok platform="github" link="https://github.com/nickspaargaren" />
          <Socialblok platform="youtube" link="https://www.youtube.com/watch?v=zDiSkH9PPJg&list=PLrZcPERRIctdZztCmNMHQ11aOne2yYOX3" />
          <Socialblok platform="linkedin" link="https://www.linkedin.com/in/nickspaargaren" />
        </div>
      </Suspense>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
serviceWorker.register();
