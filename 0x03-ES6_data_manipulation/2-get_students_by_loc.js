/**
 * Retrieves a list of students located in a specific city.
 * @param {Array} students - An array of student objects.
 * @param {String} city - The city to filter students by.
 * @returns {Object[]} An array of student objects located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
