import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <section className={styles.container}>
      <p className={styles.links}>gainesaur.io</p>
      <p className={styles.links}>past work</p>
      <p className={styles.links}>skills</p>
      <p className={styles.links}>contact</p>
    </section>
  );
}

export default Navbar;