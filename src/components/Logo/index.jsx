import React from 'react'
import "./Logo.css"
import { LiaStaylinked } from "react-icons/lia";

const Logo = () => {
  return (
    <div className='logo__container'>
      <LiaStaylinked className='icon'/>
      <h1 className="name">Genos</h1>
    </div>
  )
}

export default Logo
