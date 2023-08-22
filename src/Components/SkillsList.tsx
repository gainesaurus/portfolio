import { skills } from '../data'
import styles from './SkillsList.module.css';

const SkillsList = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Skills &amp; Technologies:</h2>
      <ul className={styles.skillList}>
        {skills.map(skill => 
        <li
          key={skill}
          className={styles.skillNode}
        >{skill}</li>)}
      </ul>
    </section>
  );
}

export default SkillsList;