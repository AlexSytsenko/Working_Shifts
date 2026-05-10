const cycle = [
  { type: "work", label: "Рання (1 день)", time: "07:00–15:00", className: "early" },
  { type: "work", label: "Рання (2 день)", time: "07:00–15:00", className: "early" },
  { type: "work", label: "Денна (1 день)", time: "15:00–23:00", className: "dayShift" },
  { type: "work", label: "Денна (2 день)", time: "15:00–23:00", className: "dayShift" },
  { type: "work", label: "Нічна (1 день)", time: "23:00–07:00", className: "night" },
  { type: "work", label: "Нічна (2 день)", time: "23:00–07:00", className: "night" },
  { type: "off", label: "Вихідний (1 день)", time: "-", className: "off" },
  { type: "off", label: "Вихідний (2 день)", time: "-", className: "off" },
];

function mod(n, m) {
  return ((n % m) + m) % m;
}

export function getShiftByOffset(startIndex, offset) {
  const index = mod(startIndex + offset, 8);
  return cycle[index];
}

export function getCycle() {
  return cycle;
}