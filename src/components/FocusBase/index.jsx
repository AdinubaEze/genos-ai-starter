import React from 'react'
import "./FocusBase.css"
import Divider from '../Divider'
import { focusBase } from '../../data'
import { robot2 } from '../../assets'

const FocusBase = () => {
  return (
    <section className='focus__base blur-effect'>
       <div className="container">
         <Divider/>
         <h1 className='title'>
           <span className="text__gradient">Focus</span> Base
         </h1>
         <div className="row">
           <div className="column bases__container">
              {
                focusBase.map((base,index)=>(
                  <div className='base' key={index}>
                     <div className="icon__container">
                       {base.icon}
                     </div>
                     <div className="details">
                        <h3 className="name">{base.name}</h3>
                        <p className="text__muted">{base.description}</p>
                     </div>
                  </div>
                ))
              }
           </div>
           <div className="column image__container primary-effect">
                 <img src={robot2} alt="" />
           </div>
         </div>
       </div>
    </section>
  )
}

export default FocusBase
