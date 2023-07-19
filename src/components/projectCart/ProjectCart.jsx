import React, { useState } from 'react'
import "./projectCart.css"
import git from '../../assets/github.svg'
import icon from '../../assets/icon.svg'

const ProjectCart = ({ title, text, img, link, button = false, setActive}) => {
  const [toggle, setToggle] = useState(true)

  const handleClick = () => {
    setToggle(!toggle);
  };
  
  return (
    <div className='project__cart'>
        <div className='project__cart__text'>
            <h3> { title } </h3>
            <p>{ text }</p>
        </div>

        {(button) ? 
          <div className='project__cart__git'>
            <a
              onClick={ () => {
                handleClick();
                setActive(toggle)
              }}
            >
              <img src={icon} alt="icon"/>
            </a>
          </div>
          :
          <div className='project__cart__git'>
            <a href={link} target="_blank" rel='noreferrer'>
              <img src={git} alt="git"/>
            </a> 
          </div>
          }

        <div className='project__cart__img'>
            <img src={img} alt="languge"/>
        </div>
    </div>
  )
}

export default ProjectCart