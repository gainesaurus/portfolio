import { projects, sideProjects } from '../data';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './ProjectList.module.css';

const ProjectList = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.heading}>portfolio</h2>
      <ul className={styles.projectList}>
        {projects.map(project => 
        <li key={project.title} className={styles.projectCard}>
          <img alt={project.title +'UI'}
            src={project.image}
            className={styles.uiImage}
          />
          <div className={styles.projectDetails}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button 
              className={styles.gitButton}
              title={project.gitLink}
            >
              <GitHubIcon className={styles.icon} /><p>Github</p>
            </button>
          </div>
        </li>)}
      </ul>
      <h2 className={styles.heading}>Side Projects &amp; Assessments:</h2>
      <ul className={styles.projectList}>
        {sideProjects.map(project => 
        <li key={project.title} className={styles.projectCard}>
          <img alt={project.title +'UI'}
            src={project.image}
            className={styles.uiImage}
          />
              <div className={styles.projectDetails}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button 
              className={styles.gitButton}
              title={project.gitLink}
            >
              <GitHubIcon className={styles.icon} /><p>Github</p>
            </button>
          </div>
        </li>)}
      </ul>
    </section>
  );
}

export default ProjectList;