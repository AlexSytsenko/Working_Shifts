
import styles from "./LegedItem.module.css";

export default function LegendItem({ color, label }) {
  return (
    <div className={styles.legendItem}>
      <div className={styles.dot} style={{ backgroundColor: color }} />

      <span>{label}</span>
    </div>
  );
}