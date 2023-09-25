import SkillNode from './SkillNode';
import ComputerIcon from '@mui/icons-material/Computer';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }:any) => {

  return (
    <li className={styles.projectCard}>
      <img alt={project.title +'UI'}
        src={project.image}
        className={styles.uiImage}
      />
      <div className={styles.projectDetails}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <ul className={styles.skillList}>
          {project.subtitle.map((skill: string) =>
            <SkillNode skill={skill} key={`${project.title}${project.subtitle.indexOf(skill)}`}/>
          )}
        </ul>
        <p className={styles.description}>{project.description}</p>
        {project.liveLink ? 
          <button 
            className={styles.linkButton}
            title={project.liveLink}>
            <ComputerIcon className={styles.icon} />
            <p>Live Site</p>
          </button>
        : null}
        {project.gitLink ? 
          <button 
           className={styles.linkButton}
           title={project.gitLink}>
           <GitHubIcon className={styles.icon} />
           <p>Github</p>
          </button>
        : null}
      </div>
    </li>
  )
}

export default ProjectCard;