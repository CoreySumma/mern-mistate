export default function convertToNumber(emotion) {
  switch (emotion) {
    case '😁':
      return 5;
    case '😊':
      return 4;
    case '😐':
      return 3;
    case '🙁':
      return 2;
    case '😭':
      return 1;
    default:
      return 0;
  }
}

