export default function hasValueFromArray(s, arr) {
  for (const i of arr) {
    if (!s.has(i)) {
      return false;
    }
  }
  return true;
}
