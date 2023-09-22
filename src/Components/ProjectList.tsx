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
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <ul className={styles.skillList}>
              {project.subtitle.map(skill =>
                <li
                key={skill}
                className={styles.skillNode}
              >{skill}</li>)}
            </ul>
            <p className={styles.description}>{project.description}</p>
            <button 
              className={styles.linkButton}
              title={project.gitLink}
            >
              <GitHubIcon className={styles.icon} /><p>Github</p>
            </button>
          </div>
        </li>)}
      </ul>
      <h2 className={styles.heading}>side projects &amp; assessments:</h2>
      <ul className={styles.projectList}>
        {sideProjects.map(project => 
        <li key={project.title} className={styles.projectCard}>
          <img alt={project.title +'UI'}
            src={project.image}
            className={styles.uiImage}
          />
              <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <ul className={styles.skillList}>
              {project.subtitle.map(skill =>
                <li
                key={`${project.title}+${skill}`}
                className={styles.skillNode}
              >{skill}</li>)}
            </ul>
            <p className={styles.description}>{project.description}</p>
            {project.liveLink ? 
             <button 
             className={styles.linkButton}
             title={project.liveLink}
             ><p>Live Site</p></button>
          : null}
            <button 
              className={styles.linkButton}
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