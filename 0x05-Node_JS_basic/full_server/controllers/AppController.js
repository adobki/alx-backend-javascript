class AppController {
  constructor(request, response) {
    this.request = request;
    this.response = response;
    this.no = '';
  }

  getAllStudents() {
    return this.no;
  }

  getAllStudentsByMajor() {
    return this.no;
  }
}

module.exports = AppController;
export default AppController;
