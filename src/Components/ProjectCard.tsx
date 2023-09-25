import SkillNode from './SkillNode';
import ComputerIcon from '@mui/icons-material/Computer';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }:any) => {

  return (
    <>
      <img alt={project.title +'UI'}
        src={project.image}
        className={styles.uiImage}
      />
      <div className={styles.projectDetails}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <ul className={styles.skillList}>
          {project.subtitle.map((skill: string) =>
          <li key={`${project.title}${project.subtitle.indexOf(skill)}`}>
            <SkillNode skill={skill} />
          </li>
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
    </>
  )
}

export default ProjectCard;