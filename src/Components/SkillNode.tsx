import styles from './SkillNode.module.css';

const SkillNode = ({ skill }:any) => {
  return (
    <li className={styles.skillNode}>{skill}</li>
  )
}

export default SkillNode;