import React from 'react';
import "./testimonials.css";
import A1 from "../../assets/avatar1.jpg";
import A2 from "../../assets/avatar2.jpg";
import A3 from "../../assets/avatar3.jpg";
import A4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

    const data = [{
        avatar: A1,
        name: "Tina Snow",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi quibusdam quos quis voluptate repellendus nesciunt magni alias, nostrum molestias."
    }, 
    {
        avatar: A2,
        name: "Shatta Whale",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi quibusdam quos quis voluptate repellendus nesciunt magni alias, nostrum molestias."
    }, 
    {
        avatar: A3,
        name: "Kwame Despite",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi quibusdam quos quis voluptate repellendus nesciunt magni alias, nostrum molestias."
    
    },
    {
        avatar: A4,
        name: "Nana Ama McBrown",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi quibusdam quos quis voluptate repellendus nesciunt magni alias, nostrum molestias."
    }]

    return (
        <section id='testimonials'>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials__container'
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={40}
                pagination={{ clickable: true }}>
                {data.map(({avatar, name, review}, index) => { return (
                    <SwiperSlide key={index} className="testimonial">
                    <div className="clint__avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <h5 className='client__name' >{name}</h5>
                    <small className='client__review' >
                        {review}
                    </small>
                </SwiperSlide>)
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials