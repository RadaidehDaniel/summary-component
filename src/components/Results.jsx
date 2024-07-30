import styles from "./Results.module.css";
import ScoreCircle from "./ScoreCircle";

export default function Results() {
  return (
    <div className={styles["result-section"]}>
      <h1>Your Result</h1>
      <ScoreCircle />
      <p className={styles["great-text"]}>Great</p>
      <p className={styles["text"]}>
        Your performance exceed 65% of the people conducting the test here!
      </p>
    </div>
  );
}
