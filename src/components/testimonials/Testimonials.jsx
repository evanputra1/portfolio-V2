import './testimonials.css';
import {Data} from './Data';

const Testimonials = () => {
  return (
    <section className="testimonial container section">
        <h2 className="section__title">Testimonial</h2>
        <span className="section__subtitle">My Clients Say</span>

        <div className="testimonial__container">
            {Data.map}
        </div>
    </section>
  )
}

export default Testimonials