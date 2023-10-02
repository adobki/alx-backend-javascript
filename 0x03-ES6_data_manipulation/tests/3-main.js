// Tests the code in the referenced script(s)

/* eslint-disable import/extensions */
import getListStudents from '../0-get_list_students.js';
import getStudentIdsSum from '../3-get_ids_sum.js';

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
