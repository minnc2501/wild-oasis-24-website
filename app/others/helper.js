export function greetByTime() {
  const currentHour = new Date().getHours(); // Get the current hour

  if (currentHour < 12) {
    return "Good morning,";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon,";
  } else {
    return "Good evening,";
  }
}
