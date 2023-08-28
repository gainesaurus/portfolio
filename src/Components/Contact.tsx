import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.heading}>Contact:</h2>
      <input placeholder="Your Name"></input>
      <input placeholder="Your E-Mail"></input>
      <input placeholder="Your Message"></input>
    </section>
  );
}

export default Contact;