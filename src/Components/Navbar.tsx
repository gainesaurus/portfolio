import { useState } from 'react';
import NavList from './NavList';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    clicked! ? setClicked(false) : setClicked(true); 
  }

  return (
    <header className={styles.container}>
      <div className={styles.linkList}>
        <h2 className={styles.navTitle}>
          mike gainey
          <span className={styles.pipeTitle}>|</span>
          <span className={styles.jobTitle}>web developer</span>
        </h2>
        <a href="#projects" className={styles.links}>portfolio</a>
        <a href="#skills" className={styles.links}>skills</a>
        <a href="#contact" className={styles.links}>contact</a>
      </div>
      <div className={styles.hamburger} onClick={handleClick}>
        <MenuIcon />
      </div>
      {clicked ?
      <NavList handleClick={handleClick} />
      : null
      }
    </header>
  );
}

export default Navbar;