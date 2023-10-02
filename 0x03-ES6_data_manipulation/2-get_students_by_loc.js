// Returns an array of IDs from a list of objects

export default function getStudentsByLocation(studentList, city) {
  if (typeof studentList !== 'object' || typeof city !== 'string') {
    return [];
  }

  return studentList.filter((student) => student.location === city);
}
