import React, { useState } from 'react';
import Separator from '../../components/separator/Separator'
import Main from '../main/Main'
import types from '../index'
import "./header.css"


const Header = () => {
  const [active, setActive] = useState("about me");

  const ToggleButton = () => {
    return (
          types.map(type => (
            <button 
              key={type}
              className={`site__header-button site__header-button-${active===type ? "active" : "inactive"}`}
              onClick={() => {
                setActive(type);
              }
              }>{ type }</button>
          ))
    );
  }
  
  return (
    <div className='site__header site__padding'>
      <div className='site__header-title'>
        <div className='site__header-title-h1'>
          <h1>alexandre ciorascu</h1>
        </div>
        <div className='site__header-title__bar'>
          <Separator/>
        </div>
      </div>
      <div className='site__header-categorybar'>
        <ToggleButton/>
      </div>
      <Main type={active}/>
    </div>
    
  )
}

export default Header