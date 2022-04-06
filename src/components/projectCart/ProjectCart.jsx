import React from 'react'
import "./projectCart.css"
import git from '../../assets/github.svg'

const ProjectCart = ({ title, text, img, link }) => {
  return (
      <div className='project__cart'>
          <div className='project__cart__text'>
              <h3> { title } </h3>
              <p>{ text }</p>
          </div>
          <div className='project__cart__git'>
              <a href={link} target="_blank" rel='noreferrer'>
                <img src={git} alt="git"/>
              </a>
          </div>
          <div className='project__cart__img'>
              <img src={img} alt="languge"/>
          </div>
      </div>
  )
}

export default ProjectCart