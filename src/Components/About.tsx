import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.description}>
        <p>Hello folks, my name is</p>
        <h2 className={styles.name}> Mike Gainey</h2>
        <h3 className={styles.bio}>and I build web stuff.</h3>
        <p>I am a front-end developer with fullstack experience and a background in teaching and creative design.</p>
        <div className={styles.linkList}>
          <a href='https://github.com/gainesaurus'
            className={styles.icon}>
            <GitHubIcon className={styles.icon} />
          </a>
          <a href='https://www.linkedin.com/in/michael-gainey-developer/'
            className={styles.icon}>
            <LinkedInIcon  />
          </a>
          <a href='#contact'
            className={styles.icon}>
            <EmailIcon className={styles.icon} />
          </a>
          
        </div>
      </div>
      <img src="./headshot.jpg" alt="headshot" className={styles.headshot}/>
    </section>
  );
}

export default About;