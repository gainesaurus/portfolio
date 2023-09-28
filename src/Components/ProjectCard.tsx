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
        {project.liveLink && 
          <a href={project.liveLink} className={styles.link}>
            <button
              className={styles.linkButton}
              title={project.liveLink}>
              <ComputerIcon className={styles.icon} style={{fontSize:'2rem'}} />
              <p>Live Site</p>
            </button>
          </a>
        }
        {project.gitLink && 
          <a href={project.gitLink} className={styles.link}>
            <button
            className={styles.linkButton}
            title={project.gitLink}
            >
            <GitHubIcon className={styles.icon} style={{fontSize:'2rem'}} />
            <p>Github</p>
            </button>
          </a>
        }
      </div>
    </li>
  )
}

export default ProjectCard;