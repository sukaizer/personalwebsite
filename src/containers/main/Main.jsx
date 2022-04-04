import React from 'react'
import "./main.css"
import types from '../index'

import { About, Projects, Contact } from '../../components'

const Main = ({type}) => {

  return (
    <div className='site__main'>
      {
        type === types[0] && <About />
      }
      {
        type === types[1] && <Projects />
      }
      {
        type === types[2] && <Contact />
      }
    </div>
  )
}

export default Main