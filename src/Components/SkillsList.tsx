import { skills } from '../data'
import SkillNode from './SkillNode';
import TestimonialList from './TestimonialList';
import styles from './SkillsList.module.css';

const SkillsList = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.heading}>skills &amp; testimonials:</h2>
      <ul className={styles.skillList}>
        {skills.map(skill => 
          <SkillNode skill={skill} key={`${skill}${skills.indexOf(skill)}`} />
        )}
      </ul>
      <TestimonialList />
    </section>
  );
}

export default SkillsList;