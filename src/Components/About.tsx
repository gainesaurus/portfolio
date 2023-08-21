import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.description}>
        <h2>Hi, I'm Mike Gainey</h2>
        <p>I am a front-end developer with fullstack experience and a background in teaching and creative design.</p>
        <div className={styles.linkList}>
          <a href='https://www.linkedin.com/in/michael-gainey-developer/'
            className={styles.icon}>
            <LinkedInIcon  />
          </a>
          <a href='https://github.com/gainesaurus'
            className={styles.icon}>
            <GitHubIcon className={styles.icon} />
          </a>
          <a href='a'
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