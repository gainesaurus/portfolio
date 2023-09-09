import { skills, testimonials } from '../data'
import styles from './SkillsList.module.css';

const SkillsList = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.heading}>skills &amp; testimonials:</h2>
      <ul className={styles.skillList}>
        {skills.map(skill => 
        <li
          key={skill}
          className={styles.skillNode}
        >{skill}</li>)}
      </ul>
      <ul className={styles.testimonialList}>
        {testimonials.map(testimonial => 
        <li
          key={testimonial.name}
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
    </section>
  );
}

export default SkillsList;