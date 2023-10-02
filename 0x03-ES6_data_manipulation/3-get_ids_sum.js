// Returns sum of id property of all objects in a list

export default function getStudentIdsSum(studentList) {
  if (typeof studentList !== 'object') {
    return 0;
  }

  return studentList.reduce((total, student) => total + student.id, 0);
}
