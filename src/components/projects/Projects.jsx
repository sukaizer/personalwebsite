import React from 'react'
import "./projects.css"


const Projects = () => {
  return (
    <div className='site__projects'>
      <h3> ☞ my projects </h3>
      <div className='site__projects-text'>
        <p>
        ‣ Pokémon themed website coded in React JS. You can check it out <a href='https://pokeviewer.com' target="_blank" rel='noreferrer'>here</a>
        </p>
        <p>
        ‣ Mobipic : basic photo editor written in Java using JavaFx
        </p>
        <p>
        ‣  Perudo : perudo game written in Java using JavaFx
        </p>
        <p>
        ‣  Sweet Night Declaration : bullet hell game project
        </p>
      </div>
    </div>
  )
}

export default Projects