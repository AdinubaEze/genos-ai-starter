import React from 'react'
import "./Services.css"
import { services } from '../../data'
import Divider from '../Divider'
import { Link } from 'react-scroll'

const Services = () => {
  return (
    <section id='services' className='blur-effect'>
       <div className="container">
          <Divider/>
          <h1 className='title'>
            Our <span className="text__gradient">Services</span>
          </h1>
          <div className="services__container">
             {
              services.map((service,index)=>(
                <div className="service" key={index}>
                   <div className="icon__container">{service.icon}</div>
                   <p className="text__muted">{service.description}</p>
                   <Link to='#contact' className='contact__btn' smooth={true}>Contact us</Link>
                </div>
              ))
             }
          </div>
       </div>
    </section>
  )
}

export default Services