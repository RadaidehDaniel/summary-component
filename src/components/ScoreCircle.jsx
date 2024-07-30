import styles from "./ScoreCircle.module.css";

export default function ScoreCircle() {
  return (
    <div className={styles["circle"]}>
      <p className={styles["score"]}>76</p>
      <p className={styles["of"]}>of 100</p>
    </div>
  );
}
