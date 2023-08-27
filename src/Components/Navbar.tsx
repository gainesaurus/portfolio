import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <p className={styles.links}>gainesaur.io</p>
      <a href="#projects" className={styles.links}>past work</a>
      <a href="#skills" className={styles.links}>skills</a>
      <a href="#contact" className={styles.links}>contact</a>
    </header>
  );
}

export default Navbar;