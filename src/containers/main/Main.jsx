import React from 'react'
import "./main.css"
import types from '../index'

import { About, Projects, Contact } from '../../components'

const Main = (props) => {

  return (
    <div className='site__main'>
      {
        props.type === types[0] && <About />
      }
      {
        props.type === types[1] && <Projects />
      }
      {
        props.type === types[2] && <Contact />
      }
    </div>
  )
}

export default Main