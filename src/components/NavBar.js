import './NavBar.css'
import React from 'react'
import { BsInstagram, BsHeart } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { FaRegCompass } from 'react-icons/fa'
import { HiOutlineUser } from 'react-icons/hi'
import { IconContext } from 'react-icons'

function NavBar() {
  return (
    <div className="container">
      <div className="container-nav-bar">
        <div className="container-logo">
          <div className="icon-logo">
            <IconContext.Provider value={{ size: '18px' }}>
              <BsInstagram />
            </IconContext.Provider>
          </div>
          <div className="logo">
            <img src="/assets/logo.png"></img>
          </div>
        </div>
        <input placeholder="Pesquisar"></input>
        <div className="menu-icon-navbar">
          <IconContext.Provider value={{ size: '18px' }}>
            <div>
              <FiSend />
            </div>
            <div>
              <FaRegCompass />
            </div>
            <div>
              <BsHeart />
            </div>
            <div>
              <HiOutlineUser />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default NavBar
