import React,{useRef} from 'react'
import "./Clients.css"
import Divider from '../Divider'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clients } from '../../data';
import { FaStar } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive';


const Clients = () => {
  const ref = useRef(null)
  const settings = {
    infinite: true,
    slidesToShow: useMediaQuery({query:'(max-width:700px)'}) ? 1 :2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed:3000,
  };
  return (
    <section id='clients'>
      <div className="container">
         <Divider/>
         <h1 className="title">
          My <span className="text__gradient">Clients Testimonies</span>
         </h1>
         <Slider
         {...settings}
         ref={ref}
         className="clients__container"
        >
            {
              clients.map((list,index) => (
                <div className="client__card" key={index}>
                  <div className="star__container">
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                  </div>
                   <p className="text__muted content">{list.review}</p>
                   <div className="row">
                       <div className="profile">
                        <img src={list.image} alt={list.name} />
                       </div>
                       <div className="details">
                         <h3 className="name">{list.name}</h3>
                         <small className="text__muted">CEO ofixa</small>
                       </div>
                   </div>
                </div>
              ))
            }
        </Slider>
      </div>
    </section>
  )
}

export default Clients
