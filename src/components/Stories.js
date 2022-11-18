import React from 'react'
import './Stories.css'

export default function Stories() {
  const listUserStories = [
    { storiesname: '9gag', storiesimage: '/assets/9gag.svg' },
    { storiesname: 'meowed', storiesimage: '/assets/meowed.svg' },
    { storiesname: 'barked', storiesimage: '/assets/barked.svg' },
    {
      storiesname: 'nathanwpylestrangeplanet',
      storiesimage: '/assets/nathanwpylestrangeplanet.svg'
    },
    { storiesname: 'wawawicomics', storiesimage: '/assets/wawawicomics.svg' },
    { storiesname: 'respondeai', storiesimage: '/assets/respondeai.svg' },
    { storiesname: 'filomoderna', storiesimage: '/assets/filomoderna.svg' },
    {
      storiesname: 'memeriagourmet',
      storiesimage: '/assets/memeriagourmet.svg'
    }
  ]

  return (
    <div className="container-stories">
      {listUserStories.map(elm => (
        <StoriesUser
          storiesimage={elm.storiesimage}
          storiesname={elm.storiesname}
        />
      ))}
    </div>
  )
}

function StoriesUser(props) {
  return (
    <div className="stories-img">
      <div>
        <img src={props.storiesimage}></img>
      </div>
      <p>{props.storiesname}</p>
    </div>
  )
}
