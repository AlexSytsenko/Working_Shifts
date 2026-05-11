import { useState } from "react";
import dayjs from "dayjs";

import styles from "./App.module.css";

import Controls from "./components/Controls/Controls";
import Result from "./components/Result/Result";
import Calendar from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";

import { useShiftCalculator } from "./hooks/useShiftCalculator";

export default function App() {
  const [startIndex, setStartIndex] = useState(0);

  // дата тепер вибирається тільки календарем
  const [targetDate, setTargetDate] = useState(new Date());

  const [visibleMonth, setVisibleMonth] = useState(dayjs());

  const result = useShiftCalculator(startIndex, targetDate);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Графік змін</h1>

      <div className={styles.top}>
        <Controls startIndex={startIndex} setStartIndex={setStartIndex} />

        <Result result={result} targetDate={targetDate} />
      </div>

      <Calendar
        startIndex={startIndex}
        targetDate={targetDate}
        setTargetDate={setTargetDate}
        visibleMonth={visibleMonth}
        setVisibleMonth={setVisibleMonth}
      />
      <Footer />
    </div>
  );
}
