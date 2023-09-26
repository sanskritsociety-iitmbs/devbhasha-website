import Quotes from "../components/Quotes/Quotes";
import styles from "./page.module.scss";
import Events from "../components/Events/Events";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Deva Bhasha</h1>
          <p>The IIT Madras BS Sanskrit Society</p>
        </div>
        <div className={styles.heroButtons}>
          <a href="/about">Know More</a>
          <a href="https://forms.gle/PKFrL8G7frszrHQK6">Start Learning</a>
        </div>
      </div>
      <Quotes/>
      <Events />
    </div>
  );
}
