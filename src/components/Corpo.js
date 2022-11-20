import React from 'react'
import './Corpo.css'
import Stories from './Stories'
import Posts from './Posts'
import SideBar from './SideBar'

export default function Corpo() {
  return (
    <div className="container-corpo">
      <div className="container-column-1">
        <Stories />
        <Posts />
      </div>
      <div className="container-column-2">
        <div>
          <SideBar />
        </div>
      </div>
    </div>
  )
}
