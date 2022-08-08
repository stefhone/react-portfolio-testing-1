import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolorem quam illum, autem necessitatibus eos suscipit excepturi error. Officia debitis nobis repellat dolore, quisquam mollitia. Quibusdam aliquid, ut ipsam cum corporis soluta dicta reiciendis recusandae vero provident eos est impedit! Laboriosam exercitationem necessitatibus in hic minus ut optio rerum.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolorem quam illum, autem necessitatibus eos suscipit excepturi error. Officia debitis nobis repellat dolore, quisquam mollitia. Quibusdam aliquid, ut ipsam cum corporis soluta dicta reiciendis recusandae vero provident eos est impedit! Laboriosam exercitationem necessitatibus in hic minus ut optio rerum.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolorem quam illum, autem necessitatibus eos suscipit excepturi error. Officia debitis nobis repellat dolore, quisquam mollitia. Quibusdam aliquid, ut ipsam cum corporis soluta dicta reiciendis recusandae vero provident eos est impedit! Laboriosam exercitationem necessitatibus in hic minus ut optio rerum.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolorem quam illum, autem necessitatibus eos suscipit excepturi error. Officia debitis nobis repellat dolore, quisquam mollitia. Quibusdam aliquid, ut ipsam cum corporis soluta dicta reiciendis recusandae vero provident eos est impedit! Laboriosam exercitationem necessitatibus in hic minus ut optio rerum.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar,name,review}, index) => {
            return(
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}
                  </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials