import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me:</h2>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
         <a href="mailto:gorangelevskigti@gmail.com">gorangelevskigti@gmail.com</a>
                   </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/goran-gelevski-4ab08b24b/" target="_blank">linkedin.com/goran-gelevski</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/goranMecka" target="_blank">github.com/goranMecka</a>
        </li>
      </ul>
    </footer>
  );
};
