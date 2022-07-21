import React from 'react'
import CTA from './CTA'
import './Header.css'
// import me from '../../assets/me.png'
import me2 from '../../assets/kokoone.png'
import HeaderSochial from './HeaderSochial'
// import SoundBar from '../Sound/SoundBar'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <SoundBar/> */}
            <h5>Hello I'm</h5>
            <h1>Muhammad Jawad</h1>
            <h5 className="text-light">Frontend Web Developer</h5>
            <CTA/> 
            <HeaderSochial/> 
            <div className="me">
            <img src={me2} alt="" />
            </div>
            <a href="#conntact" className='scroll__down'>Scroll Down -></a>
      </div>
    </header>
  )
}

export default Header