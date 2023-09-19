import React from 'react'
import "./contact.css"
import linkedin from "../../assets/linkedin.svg"
import mail from "../../assets/mail.svg"
import git from "../../assets/git.svg"

const Contact = () => {
  return (
    <div className='site__contact'>
      <h3> contact </h3>
      <div className='site__contact-text'>
        <p>
        <div className='site__contact-linkedin'>
          <img src={linkedin} alt="linkedin"/>
          ‣ LinkedIn : &nbsp; <a href="https://www.linkedin.com/in/alexandre-ciorascu/" target="_blank" rel='noreferrer'>Alexandre Ciorascu</a> 
        </div>
          <br></br>
          <div className='site__contact-git'>
            <img src={git} alt="git"/>
            ‣ GitHub : &nbsp; <a href="https://github.com/sukaizer" target="_blank" rel='noreferrer'>sukaizer</a>
        </div>
        
          <br></br>
          <div className='site__contact-mail'>
            <img src={mail} alt="mail"/>
          ‣ Email : &nbsp; <a>alexandre[dot]ciorascu[at]universite-paris-saclay[dot]fr</a>  
        </div>
          
      </p>
      </div>
    </div>
  )
}

export default Contact