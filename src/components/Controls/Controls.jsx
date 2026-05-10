import styles from "./Controls.module.css";

import { getCycle } from "../../utils/shiftCycle";

export default function Controls({
  startIndex,
  setStartIndex,
}) {
  const cycle = getCycle();

  return (
    <div className={styles.card}>
      <h2>Вхідні дані</h2>

      <label>Сьогоднішній статус</label>

      <select
        className={styles.input}
        value={startIndex}
        onChange={(e) => setStartIndex(Number(e.target.value))}
      >
        {cycle.map((item, i) => (
          <option key={i} value={i}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}