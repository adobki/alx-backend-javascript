// Returns array of students for a specific city with their new grade

export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (typeof studentList !== 'object'
    || typeof newGrades !== 'object'
    || typeof city !== 'string') {
    return [];
  }

  return studentList.filter((student) => student.location === city)
    .map((student) => {
      const hasNewGrade = newGrades.filter((grade) => grade.studentId === student.id);
      const current = {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: hasNewGrade[0] ? hasNewGrade[0].grade : 'N/A',
      };
      return current;
    });
}
