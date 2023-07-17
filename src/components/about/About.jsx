import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='site__about'>
      <h3> about <span className='me'>me</span></h3>
      <div className='site__about-text'>
        <p>
          ‣ 22 years old. HCI master student at Université Paris-Saclay. 
          <br></br>
          ‣ <b>maths</b> and <b>computer science</b> double degree bachelor. 👨‍🎓
          <br></br>
          ‣ worked as an intern within <a href="https://ex-situ.lri.fr/" target="_blank" rel='noreferrer'>ex)situ</a> and
          <a href="https://www.lisn.upsaclay.fr/research/research-departments/interaction-with-human/virtual-augmented-environments-for-simulation-experiments-venise-2/venise-team/?lang=en" target="_blank" rel='noreferrer'> Venise </a>teams in 
          <a href='https://www.lisn.upsaclay.fr/?lang=en' target="_blank" rel='noreferrer'> Lisn</a>  
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