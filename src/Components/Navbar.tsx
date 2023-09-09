import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <h2 className={styles.navTitle}>
        mike gainey
        <span className={styles.pipeTitle}>|</span>
        <span className={styles.jobTitle}>web developer</span>
      </h2>
      <a href="#projects" className={styles.links}>past work</a>
      <a href="#skills" className={styles.links}>skills</a>
      <a href="#contact" className={styles.links}>contact</a>
    </header>
  );
}

export default Navbar;