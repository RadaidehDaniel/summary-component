import ScoreTopic from "./ScoreTopic";
import styles from "./Summary.module.css";
import info from "../../data.json";
import memoryIcon from "./assets/images/icon-memory.svg";
import reactionIcon from "./assets/images/icon-reaction.svg";
import verbalIcon from "./assets/images/icon-verbal.svg";
import visualIcon from "./assets/images/icon-visual.svg";
import Button from "./Button";

export default function Summary() {
  const imgAndColorsArray = [
    {
      icon: reactionIcon,
      textColor: "hsl(0, 100%, 67%)",
      backgroundColor: "hsl(0, 100%, 95%)",
    },
    {
      icon: memoryIcon,
      textColor: "hsl(39, 100%, 56%)",
      backgroundColor: "hsl(39, 100%, 95%)",
    },
    {
      icon: verbalIcon,
      textColor: "hsl(166, 100%, 37%)",
      backgroundColor: "hsl(166, 100%, 95%)",
    },
    {
      icon: visualIcon,
      textColor: "hsl(234, 85%, 45%)",
      backgroundColor: "hsl(234, 85%, 95%)",
    },
  ];

  return (
    <div className={styles["summary-section"]}>
      <h2>Summary</h2>
      <div className={styles["topics-container"]}>
        {info.map((data, i) => {
          return (
            <ScoreTopic
              srcImg={imgAndColorsArray[i].icon}
              topicTitle={data.category}
              topicScore={data.score}
              key={data.category}
              backColor={imgAndColorsArray[i].backgroundColor}
              textColor={imgAndColorsArray[i].textColor}
            />
          );
        })}
      </div>

      <Button />
    </div>
  );
}
