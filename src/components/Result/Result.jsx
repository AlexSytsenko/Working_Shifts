import styles from "./Result.module.css";

export default function Result({
  result,
  targetDate,
}) {
  if (!result) {
    return (
      <div className={styles.card}>
        <h2>Оберіть дату</h2>
      </div>
    );
  }

  const formattedDate =
    targetDate?.toLocaleDateString("uk-UA");

  return (
    <div className={styles.card}>
      <h2>
        Результат ({formattedDate})
      </h2>

      <div className={styles.row}>
        <span>Тип дня:</span>

        <strong>
          {result.type === "work"
            ? "Робочий"
            : "Вихідний"}
        </strong>
      </div>

      <div className={styles.row}>
        <span>Зміна:</span>

        <strong>{result.label}</strong>
      </div>

      <div className={styles.row}>
        <span>Час:</span>

        <strong>{result.time}</strong>
      </div>
    </div>
  );
}