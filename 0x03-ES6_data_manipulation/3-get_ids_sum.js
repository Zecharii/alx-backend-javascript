/**
 * Calculates the sum of all student IDs.
 * @param {Array} students - An array of student objects.
 * @returns {Number} The sum of all student IDs.
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
