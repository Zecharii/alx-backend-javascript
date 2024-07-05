/**
 * Updates the grades of students in a specific city.
 * @param {Array} students - An array of student objects.
 * @param {String} city - The city to filter students by.
 * @param {Array} newGrades - An array of objects with studentId and grade.
 * @returns {Object[]} An array of student objects with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
