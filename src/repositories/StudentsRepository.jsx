import api from "@services/api";

class StudentsRepository {
  async getStudents(params) {
    const response = await api.get("/student/search" , { params });
    return response.data;
  }

  async postStudent(student){
    const response = await api.post("/student", student);
    return response.data;
  }
}

export default new StudentsRepository();