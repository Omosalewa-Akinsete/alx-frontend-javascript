export default function importStudentByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
