// Returns an array of IDs from a list of objects

export default function getListStudentIds(studentList) {
  try {
    if (typeof studentList !== 'object') {
      throw new TypeError();
    }

    return studentList.map((student) => student.id);
  } catch (err) {
    if (err.name === 'TypeError') { return []; }
    throw err;
  }
}
