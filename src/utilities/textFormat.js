export function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function capitalizeWordFirst(str) {
  return str
    .split(" ")
    .map((word) => capitalizeFirst(word))
    .join(" ");
}
