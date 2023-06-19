import React from "react";
import styles from "./page.module.scss";
import Team from "../team/page";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <p>
        Deva Bhasha Sanskrit Society was established in 2023 by a group of
        students of IIT Madras BS Degree who shared a common interest in the
        Sanskrit language and literature.
        <br /> The society's founders recognized the importance of preserving
        this ancient language and culture, and set out to create a platform for
        students to learn, practice, and promote Sanskrit.
      </p>
      <h2>Goals of Society</h2>
      <ul>
        <li>
          To facilitate the learning of the Sanskrit language in both the
          written and spoken forms.
        </li>
        <li>
          To facilitate the learning of the Devanāgarī, Grantham and IAST
          script.
        </li>
        <li>To develop tools and materials for the learning of the language</li>
        <li>
          To study and appreciate the the Indian knowledge systems preserved in
          the language, inter alia, Buddhism, Jainism, Mīmāṃsā, Vedānta,
          Saṃkhya, Yoga, Nyāya, Vaiśeṣika.
        </li>
        <li>
          To produce material in the language for readers. This can include
          electronic Essays, Newsletters, Magazines.
        </li>
      </ul>
        <h2>Our Team</h2>
        <Team />
    </div>
  );
};

export default About;
