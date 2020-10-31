import React, { Suspense } from 'react';
import {useSpring, animated} from 'react-spring'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

const Socials = React.lazy(() => import('./components/social')); 

const App = () => {

  const fadeIn = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={fadeIn} className="inhoud">
      <Suspense fallback={<div>Laden...</div>}>
        <div className="titel">
          <h1>Nick Spaargaren</h1>
          <h2>Designer & Front-End Developer</h2>
        </div>
        <Socials/>
      </Suspense>
    </animated.div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
serviceWorker.register();
