export function getColor() {
  const colors = [
    "#c261d1",
    "#6184d1",
    "#61d1ba",
    "#d16181",
    "#d1c061",
    "#7661d1",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
