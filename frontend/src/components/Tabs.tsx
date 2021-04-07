import React, { useRef, useState } from 'react';


interface TabProps {
  titel: string,
  beschrijving: string,
  id: boolean,
  children: React.ReactNode
}

export const SimpleTab = (props: TabProps) => {


  console.log(props);

  const tab = useRef(null);

  const tabManager = () => {

    // [...document.querySelectorAll('.tabs .tab')].forEach((item, key) => {
    //   item.classList.remove('active');
    // });

    // tab.current.classList.add('active');

  };

  return (
    <div className="tab" ref={tab} onClick={() => {tabManager()}} data-key={props.id}><h3>{props.titel}</h3><p>{props.beschrijving}</p></div>
  )
}



export const SimpleTabs = ({children}) => {

  const [SimpleTabsState, setSimpleTabsState] = useState({openTab: 0, openTabTitel: ''});
  
  children.map((item, key) => {
    console.log(item);
  })
  
  return (
    <div className="tabs">
      {children}
    </div>
  )

}