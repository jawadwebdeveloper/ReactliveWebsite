import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
const HeaderSochial = () => {
  return (
    <div className="header__sochials">
        <a href="https://www.linkedin.com/in/muhammad-jawad-230026236/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/jawadwebdeveloper" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/jawad_codes/" target="_blank"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSochial