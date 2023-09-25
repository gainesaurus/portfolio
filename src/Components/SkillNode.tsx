import styles from './SkillNode.module.css';

const SkillNode = ({ skill }:any) => {
  return (
    <p className={styles.skillNode}>{skill}</p>
  )
}

export default SkillNode;