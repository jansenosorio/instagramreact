import React from 'react'
import './Corpo.css'
import Stories from './Stories'

function Corpo() {
  return (
    <div className="container-corpo">
      <div className="container-column-1">
        <Stories />
        <div>Post</div>
      </div>
      <div className="container-column-2">
        <div>SideBar</div>
      </div>
    </div>
  )
}

export default Corpo
