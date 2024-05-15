import React,{useRef} from 'react'
import "./Header.css"
import { robot } from '../../assets'
import StarBackground from '../StarBackground'
import Divider from '../Divider'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger,useGSAP)


const Header = () => {
  const container = useRef(null);
  useGSAP(()=>{
   /*  gsap.fromTo(".header__image",{
     scale:0.5,
     duration:1,
     opacity:0.5,
   },
   {
     scale:1,
     duration:1,
     ease:"sine.in",
     opacity:1,
   }) */


   const timeline = gsap.timeline({delay:1});
   timeline
   .fromTo(".header__image",{
    scale:0.5,
    opacity:0,
  },
  {
    scale:1,
    opacity:1,
  })
  .from(".sub__title",{
    opacity:0,
    y:-30,
  })
  .from(".divider",{
    opacity:0,
    x:-30,
  })
   .from(".title",{
     opacity:0,
   })
   .from(".description",{
     opacity:0,
   })
   .from(".buttons__container",{
     x:-40,
     opacity:0,
   })
 },{scope:container});
  return (
    <header className='header' ref={container}>
      <StarBackground>
      <div className="header__row">
       <div className="column">
           <div className="header__image">
              <img src={robot} alt="" />
           </div>
        </div>
        <div className="column">
          <h3 className="text__muted sub__title">Artificial Intelligence and Robotics Engineering</h3>
          <Divider/>
          <h1 className="title">
            <span className="text__gradient">
              Transforming Perceptions
            </span> about the Potential of Robotics.
          </h1>
          <p className='description text__muted'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ullam, veritatis dicta sed hic reprehenderit aut iste enim magnam similique illo est libero provident voluptatum qui quia nemo odit repellat!
          </p>
          <div className="buttons__container">
           <a href="#focus-base" className="btn btn__primary">Explore more</a>
          </div>
        </div>
        </div>
      </StarBackground>
    </header>
  )
}

export default Header
