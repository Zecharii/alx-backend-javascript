/**
 * Retrieves a list of student IDs from an array of student objects.
 * @param {Array} students - An array of student objects.
 * @returns {Number[]} An array of student IDs.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
