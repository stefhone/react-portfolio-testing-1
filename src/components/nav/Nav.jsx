import React from 'react'
import { useState } from 'react';
import './nav.css';
import {RiHome2Line} from 'react-icons/ri'
import {AiOutlineUser} from 'react-icons/ai'
import {TbBook} from 'react-icons/tb'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessages} from 'react-icons/tb'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHome2Line/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TbBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessages/></a>
    </nav>
  )
}

export default Nav