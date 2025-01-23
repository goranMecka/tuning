import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/abboutMe.avif")}
          alt="Image-Writing-Office"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Skills</h3>
              <p>
                HTML, CSS, BOOTSTRAP, TAILWIND, JAVASCRIPT, REACT,
               TYPESCRIPT, NEXT, ANGULAR, GIT, POWERAPPS, GITHUB COPILOT.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/react.png")} className={styles.react} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Additional Education</h3>
              <p>
               I reinforced my skills with different courses for latest development tools.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
