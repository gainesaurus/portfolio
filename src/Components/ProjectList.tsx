import { projects } from '../data';
import ProjectCard from './ProjectCard';
import styles from './ProjectList.module.css';

const ProjectList = () => {
  
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.heading}>portfolio:</h2>
      <ul className={styles.projectList}>
        {projects.map(project => 
          <ProjectCard project={project} key={project.title} />
        )}
      </ul>
    </section>
  );
}

export default ProjectList;