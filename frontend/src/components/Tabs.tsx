import React, { useEffect, useRef, useState } from 'react';

import { connect, Provider, } from 'react-redux';
import { createStore } from 'redux';

function mapStateToProps(state) {
  return {
    value: state.value
  };
}

const initialState = {
  value: ''
};


function reducer(state = initialState, action) {
  state.value = 'bla';
  return state;
}


const store = createStore(reducer);

interface TabProps {
  title: string,
  beschrijving: string,
  id: boolean,
  children: any
}

export const SimpleTab = (props: TabProps) => {

  const tab = useRef(null);

  const tabManager = (props) => {

    [...document.querySelectorAll('.tabs .tab')].forEach((item, key) => {
      item.classList.remove('active');
    });

    tab.current.classList.add('active');
    
    console.log(store.getState());
    store.dispatch({ type: props.title });
    console.log(store.getState());


    
  };




  const [SimpleTabsState, setSimpleTabsState] = useState({openTab: 0, openTabtitle: '', openTabContent: ''});

  // console.log(SimpleTabsState);
    
  // useEffect(() => {
  //   document.querySelector('#tabsContent').innerHTML = `You clicked ${SimpleTabsState.openTabtitle} times`;
  // });

  return (
    <div className="tab" ref={tab} onClick={() => {
      tabManager(props);    
    }}><h3>{props.title}</h3><p>{props.beschrijving}</p></div>
  )
}



export const SimpleTabs = ({children}) => {
  
  
  
  
  return (
    <Provider store={store}>
  

    <div className="tabs">
      <div className="tabsList">{children}</div>
      <div className="tabsContent"></div>
    </div>
    </Provider>
  )

}