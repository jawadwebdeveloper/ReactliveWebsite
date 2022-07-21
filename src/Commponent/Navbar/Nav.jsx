import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

// use state
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNave] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNave('#')} className={activeNav === '#' ?  'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNave('#about')} className={activeNav === '#about' ?  'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNave('#experience')} className={activeNav === '#experience' ?  'active': ''}><BiBook/></a>
      <a href="#service" onClick={()=> setActiveNave('#services')} className={activeNav === '#services' ?  'active': ''}><RiServiceLine/></a>
      <a href="#conntact" onClick={()=> setActiveNave('#conntact')} className={activeNav === '#conntact' ?  'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav