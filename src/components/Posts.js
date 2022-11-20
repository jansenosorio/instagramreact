import React from 'react'
import './Posts.css'
import { AiOutlineEllipsis, AiTwotoneHeart } from 'react-icons/ai'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { FiSend } from 'react-icons/fi'
import { BsBookmark, BsHeart } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export default function Posts() {
  const listaPost = [
    {
      headername: 'meowed',
      headerimgurl: '/assets/meowed.svg',
      postimgurl: '/assets/gato-telefone.svg',
      imgurllike: '/assets/respondeai.svg',
      nameoflike: 'respondeai'
    },
    {
      headername: 'barked',
      headerimgurl: '/assets/barked.svg',
      postimgurl: '/assets/dog.svg',
      imgurllike: '/assets/adorable_animals.svg',
      nameoflike: 'adorable_animals'
    }
  ]

  return (
    <div className="container-posts">
      {listaPost.map(elm => (
        <PostsUser
          headername={elm.headername}
          headerimgurl={elm.headerimgurl}
          postimgurl={elm.postimgurl}
          imgurllike={elm.imgurllike}
          nameoflike={elm.nameoflike}
        />
      ))}
    </div>
  )
}

function PostsUser(props) {
  return (
    <div className="posts">
      <div className="post-header">
        <div>
          <img src={props.headerimgurl}></img>
          <p>{props.headername}</p>
        </div>
        <div>
          <IconContext.Provider value={{ size: '16px' }}>
            <AiOutlineEllipsis />
          </IconContext.Provider>
        </div>
      </div>
      <img src={props.postimgurl}></img>
      <div className="post-icons">
        <div>
          <IconContext.Provider value={{ size: '22px' }}>
            <div>
              <BsHeart />
            </div>
            <div>
              <IoChatbubbleOutline />
            </div>
            <div>
              <FiSend />
            </div>
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ size: '22px' }}>
            <BsBookmark />
          </IconContext.Provider>
        </div>
      </div>
      <div className="post-interaction">
        <img src={props.imgurllike}></img>
        <p>
          curtido por <span>{props.nameoflike}</span> e{' '}
          <span>outras 101.523 pessoas</span>
        </p>
      </div>
    </div>
  )
}
