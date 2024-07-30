import styles from "./ScoreTopic.module.css";

export default function ScoreTopic({
  srcImg,
  topicTitle,
  topicScore,
  backColor,
  textColor,
}) {
  return (
    <div
      className={styles["score-topic-container"]}
      style={{ backgroundColor: backColor }}
    >
      <div>
        <img src={srcImg} alt="" />
        <p className={styles["topic"]} style={{ color: textColor }}>
          {topicTitle}
        </p>
      </div>
      <p className={styles["score"]}>
        {topicScore} <span>/ 100</span>
      </p>
    </div>
  );
}
