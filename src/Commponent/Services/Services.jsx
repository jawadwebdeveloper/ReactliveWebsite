import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
import {RiShieldCheckFill} from 'react-icons/ri'
const Services = () => {
  return (
    <section id='service'> 
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'> 
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className='service__list'>
              
                <li>
                  <RiShieldCheckFill className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                
            </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        <article className='service'> 
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
              
                <li>
                  <RiShieldCheckFill className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                
            </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'> 
            <div className="service__head">
              <h3>Contant Creation</h3>
            </div>
            <ul className='service__list'>
              
                <li>
                  <RiShieldCheckFill className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur.</p>
                </li>
                
            </ul>
        </article>
        {/* END OF  CONTANT CREATION */}
      </div>
    </section>
  )
}

export default Services