import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='site__about'>
      <h3> about <span className='me'>me</span></h3>
      <div className='site__about-text'>
        <p>
          ‣ 21 years old. HCI master student at Université Paris-Saclay. 
          <br></br>
          ‣ <b>maths</b> and <b>computer science</b> double degree bachelor. 👨‍🎓
          <br></br>
          ‣ worked as an intern at HCI lab team ex)situ 👨‍💻
          <br></br>
          ‣ video games 🕹 and DnB music enjoyer 🎵
          <br></br>
          ‣ mostly interested in software design, VR and game design
        </p>
      </div>
    </div>
  )
}

export default About