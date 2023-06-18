import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroText}>
        <h1>Dev Bhasha</h1>
        <p>The IIT Madras Sanskrit Society</p>
      </div>
      <div className={styles.heroButtons}>
        <a href="">Know More</a>
        <a href="">Start Learning</a>
      </div>
    </div>
  );
}
