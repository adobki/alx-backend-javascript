// Tests the code in the referenced script(s)

/* eslint-disable import/extensions */
import getListStudentIds from '../1-get_list_student_ids.js';
import getListStudents from '../0-get_list_students.js';

console.log(getListStudentIds('hello'));
console.log(getListStudentIds(getListStudents()));
