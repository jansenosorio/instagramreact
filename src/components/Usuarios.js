import React from 'react'
import './Usuarios.css'
import { BsPencil } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export default function Usuarios() {
  const [img, setImg] = React.useState('/assets/catanacomics.svg')
  const [user, setUser] = React.useState('catanacomics')
  const [name, setName] = React.useState('')

  function changeImage() {
    let isImg = ''
    while (isImg === '') {
      isImg = prompt('Insira URL da imagem:')
    }

    if (isImg !== '') {
      setImg(isImg)
    } else setImg('/assets/catanacomics.svg')
  }

  function changeName() {
    let isName = ''
    while (isName === '') {
      isName = prompt('Insina o novo nome')
    }

    if (isName !== '') {
      setName(isName)
    } else setName('Catana')
  }

  function changeUser() {
    setUser(prompt('Selecione o nome de usuário.'))
  }

  return (
    <div className="container-user" data-test="user">
      <img onClick={changeImage} src={img} data-test="profile-image"></img>
      <div className="user-name">
        <p onClick={changeUser}>{user}</p>
        <p onClick={changeName} data-test="name">
          {name === '' ? 'Catana' : name}
          <IconContext.Provider value={{ size: '10px' }}>
            <BsPencil data-test="edit-name" />
          </IconContext.Provider>
        </p>
      </div>
    </div>
  )
}
