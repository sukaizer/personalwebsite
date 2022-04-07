import React from 'react'
import "./about.css"
import alex from '../../assets/alex.png'

const About = () => {
  return (
    <div className='site__about'>
      <h3> about <span className='me'>me</span></h3>
      <div className='site__about-text'>
        <p>
          ‣ 21 years old. HCI master student at Université Paris-Saclay. 
          <br></br>
          ‣ I have a Maths and Computer Science double degree bachelor. 👨‍🎓
          <br></br>
          ‣ worked as an intern at HCI lab team ex)situ 👨‍💻
          <br></br>
          ‣ video games 🕹 and house music enjoyer 🎵
        </p>
      </div>
      <div className='site__about-imgcontainer'>
          <img src={alex} alt="alex"></img>
      </div>
    </div>
  )
}

export default About