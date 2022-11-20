import React from 'react'
import './SideBar.css'
import Usuarios from './Usuarios'
import Sugestoes from './Sugestoes'

export default function() {
  return (
    <div className="container-sidebar">
      <div>
        <Usuarios />
      </div>
      <div>
        <Sugestoes />
      </div>
      <p className="footer-menu">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </p>
      <p className="footer-sidebar">© 2021 INSTAGRAM DO FACEBOOK</p>
    </div>
  )
}
