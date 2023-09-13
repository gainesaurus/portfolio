import styles from './NavList.module.css';

const NavList = ({handleClick}: any) => {
  return (
    <div className={styles.container} onClick={handleClick}>
      <a href="#projects" className={styles.links}>portfolio</a>
      <a href="#skills" className={styles.links}>skills</a>
      <a href="#contact" className={styles.links}>contact</a>
    </div>
  )
}

export default NavList;