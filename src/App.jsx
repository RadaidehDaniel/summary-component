import styles from "./App.module.css";
import Results from "./components/Results";
import Summary from "./components/Summary";

function App() {
  return (
    <section className={styles["app-container"]}>
      <Results />
      <Summary />
    </section>
  );
}

export default App;
