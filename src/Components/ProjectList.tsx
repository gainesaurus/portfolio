import { projects, sideProjects } from '../data';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './ProjectList.module.css';

const ProjectList = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.heading}>Past Work:</h2>
      <ul className={styles.projectList}>
        {projects.map(project => 
        <li key={project.title} className={styles.projectCard}>
          <img alt={project.title +'UI'}
            src={project.image}
            className={styles.uiImage}
          />
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <button>
            <GitHubIcon className={styles.icon} />
          </button>
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
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </li>)}
      </ul>
    </section>
  );
}

export default ProjectList;