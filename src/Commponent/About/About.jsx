import React from 'react'
import './About.css'
// import aboutme from '../../assets/me-about.jpg'
import aboutme from '../../assets/kpkp.jpeg'
// import aboutme from '../../assets/pics.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                    <img src={aboutme} alt="" />
              </div>
            </div>
            <div className="about__conntent">
                <div className="about__cards">

                  <article className='about__card'>
                        <FaAward className='about__icon'/>
                      <h5>Experince</h5>
                      <small>2+ Years Working</small>
                  </article>

                  <article className='about__card'>
                        <FiUsers className='about__icon'/>
                      <h5>Clients</h5>
                      <small>20+ Worldwide</small>
                  </article>

                  <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                      <h5>Projects</h5>
                      <small>50+</small>
                  </article>

                </div>

                
                  <p>
                    A high performing individual, demonstrating drive, enthusiasm and initiative. I want to excel 
                    my programming skills in the field of software in your opportunity to provide organization for 
                    mutual growth. I am personally inclined towards technology and possess a keen interest in 
                    gaining knowledge, excel at my field and contribute my level best to the world. To gain work 
                    experience, improve my technical skills and will foster both personal and professional 
                    growth.
                   </p>
               

                 <a href="#conntact" className='btn btn-primary'>Let's Talk</a> 
            </div>
      </div>
    </section>
  )
}

export default About