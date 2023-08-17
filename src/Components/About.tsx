import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.container}>
      <p className={styles.description}>My name is Mike Gainey and I am a front-end developer with fullstack experience and a background in teaching and creative design.</p>
      <img src="./headshot.jpg" alt="headshot" className={styles.headshot}/>
    </section>
  );
}

export default About;