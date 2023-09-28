import { testimonials } from '../data';
import styles from './TestimonialList.module.css';

const TestimonialList = () => {

  return (
    <>
      <h2 className={styles.heading}>testimonials:</h2>
      <ul className={styles.testimonialList}>
        {testimonials.map(testimonial => 
        <li
          key={`${testimonial.name}${testimonials.indexOf(testimonial)}`}
          className={styles.testimonial}
        >
          <p className={styles.quote}>{testimonial.quote}</p>
          <div className={styles.byline}>
            <p>{testimonial.name}</p>
            <p>{testimonial.title}</p>
            <p>{testimonial.company}</p>
          </div>
        </li>)}
      </ul>
    </>
  )
}

export default TestimonialList;