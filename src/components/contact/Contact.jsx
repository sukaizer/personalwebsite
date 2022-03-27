import React from 'react'
import "./contact.css"
import linkedin from "../../assets/linkedin.svg"
import mail from "../../assets/mail.svg"
import git from "../../assets/git.svg"

const Contact = () => {
  return (
    <div className='site__contact'>
      <h3>☞ contact</h3>
      <div className='site__contact-text'>
        <p>
        <div className='site__contact-linkedin'>
          <img src={linkedin} alt="linkedin"/>
          ‣ LinkedIn :  <a href="https://www.linkedin.com/in/alexandre-ciorascu/">Alexandre Ciorascu</a> 
        </div>
          <br></br>
          <div className='site__contact-git'>
            <img src={git} alt="git"/>
            ‣ GitHub : <a href="https://github.com/sukaizer">sukaizer</a>
        </div>
        
          <br></br>
          <div className='site__contact-mail'>
            <img src={mail} alt="mail"/>
          ‣ Email : <a href="mailto:alexandre.ciorascu@universite-paris-saclay.fr">alexandre.ciorascu@universite-paris-saclay.fr</a>  
        </div>
          
      </p>
      </div>
    </div>
  )
}

export default Contact