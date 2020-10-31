import React, { Suspense } from 'react';
import loadable from '@loadable/component'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

const Socials = loadable(() => import('./components/social')); 

const App = () => {

  return (
    <div className="inhoud">
      <Suspense fallback={<div>Laden...</div>}>
        <div className="titel">
          <h1>Nick Spaargaren</h1>
          <h2>Designer & Front-End Developer</h2>
        </div>
        <Socials/>
      </Suspense>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
serviceWorker.register();
