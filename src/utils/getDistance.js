const countdownDate = new Date("Jun 27, 2021 15:00:00").getTime();
const startDate = new Date("Jan 12, 2021 15:00:00").getTime();

export default function getDistance(timeInterval, counter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const now = new Date().getTime();
      let diff = countdownDate - now;
      const subtractTime = 3602 * 1000 * 36.74;

      if (diff < 0) {
        diff = countdownDate - startDate - counter * subtractTime;
      }

      resolve(diff < 0 ? 0 : diff);
    }, timeInterval);
  });
}

export function getOriginalDistance() {
  const now = new Date().getTime();
  return countdownDate - now;
}
