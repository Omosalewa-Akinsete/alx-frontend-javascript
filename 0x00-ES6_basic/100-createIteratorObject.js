export default function createIteratorObject(report) {
  const arr = [];

  for (const employee of Object.values(report.allEmployees)) {
    arr.push(...employee);
  }

  return arr;
}
