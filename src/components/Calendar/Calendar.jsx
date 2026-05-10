import dayjs from "dayjs";

import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "dayjs/locale/uk";

import styles from "./Calendar.module.css";

import LegendItem from "../LegendItem/LegedItem";

import { getShiftByOffset } from "../../utils/shiftCycle";
import { normalizeDate } from "../../utils/date";

export default function Calendar({ startIndex, targetDate, setTargetDate }) {
  const today = normalizeDate(new Date());

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Календар змін</h2>

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
        <DateCalendar
          dayOfWeekFormatter={(date) => date.format("dd").toUpperCase()}
          value={targetDate ? dayjs(targetDate) : null}
          onChange={(newValue) => {
            if (!newValue) return;

            setTargetDate(newValue.toDate());
          }}
          views={["year", "month", "day"]}
          openTo="day"
          yearsOrder="desc"
          sx={{
            width: "100%",
            maxWidth: "100%",
          }}
          slotProps={{
            day: (ownerState) => {
              const target = normalizeDate(ownerState.day.toDate());

              const diffDays = Math.round(
                (target - today) / (1000 * 60 * 60 * 24),
              );

              const shift = getShiftByOffset(startIndex, diffDays);

              let bgColor = "transparent";
              let textColor = "#000";

              if (shift?.className === "early") {
                bgColor = "#81c784";
              }

              if (shift?.className === "dayShift") {
                bgColor = "#64b5f6";
              }

              if (shift?.className === "night") {
                bgColor = "#9575cd";
                textColor = "#fff";
              }

              if (shift?.className === "off") {
                bgColor = "#e0e0e0";
              }

              // const isSelected =
              //   normalizeDate(targetDate).getTime() === target.getTime();

              const isToday =
                normalizeDate(today).getTime() === target.getTime();

              return {
                sx: {
                  backgroundColor: bgColor,

                  color: textColor,

                  borderRadius: "50%",

                  border: isToday ? "3px solid #111827" : "none",

                  transition: "all 0.2s ease-in-out",

                  "&:hover": {
                    backgroundColor: bgColor,

                    filter: "brightness(0.95)",
                  },

                  "&.Mui-selected": {
                    backgroundColor: "#111827",

                    color: "#ffffff",

                    boxShadow: "0 0 0 3px rgba(6, 182, 212, 0.45)",
                  },

                  "&.Mui-selected:hover": {
                    backgroundColor: "#111827",

                    filter: "brightness(1.1)",
                  },
                },
              };
            },
          }}
        />
      </LocalizationProvider>

      <div className={styles.legend}>
        <LegendItem color="#81c784" label="Рання зміна" />

        <LegendItem color="#64b5f6" label="Денна зміна" />

        <LegendItem color="#9575cd" label="Нічна зміна" />

        <LegendItem color="#e0e0e0" label="Вихідний" />
      </div>
    </div>
  );
}
