export function getClass(i) {
  if (i % 5 === 0) {
    return "big";
  } else if (i % 6 === 0) {
    return "wide";
  } else if (i % 7 === 0) {
    return "tall";
  }
}
