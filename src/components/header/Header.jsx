import React from 'react'
import './header.css'
import HeaderCTA from './HeaderCTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Stefan Hone</h1>
        <h5 className="text-light">Front End Developer</h5>
        <HeaderCTA/>

        <div className="me">
          <img src={ME} alt="Stefan Hone" />
        </div>
      </div>
    </header>
  )
}

export default Header