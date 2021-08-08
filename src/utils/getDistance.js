const countdownDate = new Date("Jun 27, 2021 15:00:00").getTime();

export default function getDistance() {
  const now = new Date().getTime();
  const diff = countdownDate - now;
  return diff < 0 ? 0 : diff;
}
