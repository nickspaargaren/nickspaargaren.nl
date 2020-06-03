import React from 'react';

function Socialblok(item) {
  return <a className={item.platform} rel="noopener noreferrer" href={item.link} target="_blank" >
          <i className={`fab fa-${item.platform}`}></i>
          <span><strong>{item.platform}</strong>Nick Spaargaren</span>
        </a>;
}

export default Socialblok;