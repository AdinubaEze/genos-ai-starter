import React from 'react'
import "./StarBackground.css"

const StarBackground = ({children}) => {
  return (
    <div className='star__background full__height'>
        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>
        <div className="star star4"></div>
        <div className="star star1"></div>
        <div className="star star1"></div>
        <div className="star star1"></div>
        <div className="star star1"></div>
        <div className="container">
          {children}
        </div>
    </div>
  )
}

export default StarBackground
