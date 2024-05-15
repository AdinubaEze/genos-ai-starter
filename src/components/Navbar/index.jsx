import React, { useState } from 'react'
import "./Navbar.css"
import Logo from '../Logo';
import { menus } from '../../data';
import { Link } from 'react-scroll';
import { RiMenu3Fill } from "react-icons/ri";
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <nav className='navbar'>
       <Logo/>
       <div className={`column hamburger ${open ? 'visible':''}`}>
          <div className="menu__group">
              <div 
               className="icon__container cancel__btn"
               onClick={()=>setOpen(!open)}
               >
                  <FaTimes/>
              </div>
              {
                menus.map((menu,index)=>(
                  <Link
                   to={menu.routeId}
                   className='item'
                   activeClass='text__gradient'
                   smooth={true}
                   spy={true}
                   offset={-70}
                   onClick={()=>setOpen(false)}
                   key={index}
                  >
                    {menu.name}
                  </Link>
                ))
              }
          </div>
       </div>
       <div className="column">
         <Link to='contact' className='btn btn__primary contact__btn'>Talk To Us</Link>
         <div 
          className="icon__container menu__btn"
          onClick={()=>setOpen(!open)}
          >
           <RiMenu3Fill/>
         </div>
       </div>
    </nav>
  )
}

export default Navbar
