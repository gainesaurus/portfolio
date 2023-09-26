import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data:any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.heading}>contact:</h2>
      <form
        data-netlify="true"
        name="contact"
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.formField}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className={styles.nameInput}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your E-Mail"
            className={styles.emailInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formField}>
          <label
            htmlFor="message"
            className={styles.label}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className={styles.msgInput}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={styles.submitBtn}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;