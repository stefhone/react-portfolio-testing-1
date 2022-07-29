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
      <a href="#" className='active'><RiHome2Line/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><TbBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><TbMessages/></a>
    </nav>
  )
}

export default Nav