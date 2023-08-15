import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.container}>
      <div></div>
      <img src="./headshot.jpg" alt="headshot" className={styles.headshot}/>
    </section>
  );
}

export default About;