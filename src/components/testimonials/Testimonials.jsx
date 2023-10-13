// import {Data} from './Data';
import './testimonials.css';

// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonial container section">
        <h2 className="section__title">Testimonial</h2>
        <span className="section__subtitle">My Clients Say</span>
        <p className='testimonial__none'>Nothing Testimonial to see.</p>

        {/* <Swiper className="testimonial__container" 
        grabCursor={true}
        spaceBetween={24}
        pagination={{
            dynamicBullets: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }} 
        modules={[Pagination]}>
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt="" className='testimonial__img' />
                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper> */}
    </section>
  )
}

export default Testimonials