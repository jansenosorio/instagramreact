import React from 'react'
import './Usuarios.css'
import { BsPencil } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export default function Usuarios() {
  const [img, setImg] = React.useState('/assets/catanacomics.svg')
  const [user, setUser] = React.useState('catanacomics')
  const [name, setName] = React.useState('Catana')

  function changeImage() {
    setImg(prompt('Qual link da sua imagem?'))
  }

  function changeName() {
    setName(prompt('Insina o novo nome'))
  }

  function changeUser() {
    setUser(prompt('Selecione o nome de usuário.'))
  }

  return (
    <div className="container-user">
      <img onClick={changeImage} src={img}></img>
      <div className="user-name">
        <p onClick={changeUser}>{user}</p>
        <p onClick={changeName}>
          {name}
          <IconContext.Provider value={{ size: '10px' }}>
            <BsPencil />
          </IconContext.Provider>
        </p>
      </div>
    </div>
  )
}
