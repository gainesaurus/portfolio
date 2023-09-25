import { projects, sideProjects } from '../data';
import ProjectCard from './ProjectCard';
import styles from './ProjectList.module.css';

const ProjectList = () => {
  
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.heading}>portfolio</h2>
      <ul className={styles.projectList}>
        {projects.map(project => 
        <li key={project.title} className={styles.projectCard}>
          <ProjectCard project={project} />
        </li>
        )}
      </ul>
      <h2 className={styles.heading}>side projects &amp; assessments:</h2>
      <ul className={styles.projectList}>
        {sideProjects.map(project => 
        <li key={project.title} className={styles.projectCard}>
          <ProjectCard project={project} />
        </li>)}
      </ul>
    </section>
  );
}

export default ProjectList;