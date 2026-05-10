import { useMemo } from "react";

import { getShiftByOffset } from "../utils/shiftCycle";

import { normalizeDate } from "../utils/date";

export function useShiftCalculator(
  startIndex,
  targetDate
) {
  return useMemo(() => {
    if (startIndex === null || !targetDate) {
      return null;
    }

    const today = normalizeDate(new Date());

    const target = normalizeDate(targetDate);

    const diffDays = Math.round(
      (target - today) /
        (1000 * 60 * 60 * 24)
    );

    return getShiftByOffset(
      startIndex,
      diffDays
    );
  }, [startIndex, targetDate]);
}