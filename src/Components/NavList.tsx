import styles from 'NavList.module.css';

const NavList = () => {
  return (
    <div className={styles.container}>
      <a href="#projects" className={styles.links}>past work</a>
      <a href="#skills" className={styles.links}>skills</a>
      <a href="#contact" className={styles.links}>contact</a>
    </div>
  )
}

export default NavList;