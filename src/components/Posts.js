import React from 'react'
import './Posts.css'
import { AiOutlineEllipsis, AiTwotoneHeart } from 'react-icons/ai'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { FiSend } from 'react-icons/fi'
import {
  BsBookmark,
  BsHeart,
  BsHeartFill,
  BsFillBookmarkFill
} from 'react-icons/bs'
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
  const [bookmark, setBookmark] = React.useState('oldIcon')
  const [heart, setHeart] = React.useState('heart')
  const [likes, setLikes] = React.useState(101.523)

  function handleClickBookMark() {
    if (bookmark == 'oldIcon') {
      setBookmark('newIcon')
    } else {
      setBookmark('oldIcon')
    }
  }

  function handleHeart() {
    if (heart === 'heart') {
      setHeart('newHeart')
      setLikes(101.524)
    } else {
      setHeart('heart')
      setLikes(101.523)
    }
  }

  function handleHeartImg() {
    if (heart === 'heart') {
      setHeart('newHeart')
      setLikes(101.524)
    }
  }

  return (
    <div className="posts" data-test="post">
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
      <img
        src={props.postimgurl}
        onClick={handleHeartImg}
        data-test="post-image"
      ></img>
      <div className="post-icons">
        <div>
          <IconContext.Provider value={{ size: '22px' }}>
            <div onClick={handleHeart} data-test="like-post">
              {heart == 'heart' ? <BsHeart /> : <BsHeartFill color="red" />}
            </div>
            <div>
              <IoChatbubbleOutline />
            </div>
            <div>
              <FiSend />
            </div>
          </IconContext.Provider>
        </div>
        <div onClick={handleClickBookMark} data-test="save-post">
          {bookmark == 'oldIcon' ? (
            <BsBookmark size={22} />
          ) : (
            <BsFillBookmarkFill size={22} />
          )}
        </div>
      </div>
      <div className="post-interaction">
        <img src={props.imgurllike}></img>
        <p>
          curtido por <span>{props.nameoflike}</span> e{' '}
          <span>
            outras <span data-test="like-number">{likes}</span> pessoas
          </span>
        </p>
      </div>
    </div>
  )
}

{
  /* <IconContext.Provider value={{ size: '22px' }}>
            <BsBookmark />
          </IconContext.Provider> */
}
