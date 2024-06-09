import api from "@services/api";
import { axiosElasticInstance } from "@services/api";

class UsersRepository {
  async getUsers(params) {
    const response = await axiosElasticInstance.get(`/users/_search`);
    return response.data;
  }

  async getStats() {
    const response = await api.get(`/statistics`);
    return response.data;
  }

  async postUser(user) {
    const response = await api.post(`/user/signup`, user);
    return response.data;
  }

  async deleteUser(id) {
    const response = await axiosElasticInstance.delete(`/users/_doc/${id}`, id);
    return response.data;
  }
  async getUserById(id) {
    const response = await axiosElasticInstance.get(`/users/_doc/${id}`, id);
    return response.data;
  }

  async updateUser(user) {
    const response = await axiosElasticInstance.put(`/users/_doc/${user.id}`, user);
    return response.data;
  }

  async toglleUserStatus(user) {
    const response = await api.put(`/users/toggleStatus/${user}`);
    return response.data;
  }

  async login(user) {
    const response = await api.post(`/user/login`, user);
    return response.data;
  }

  async register(user) {
    const response = await api.post(`/user/signup`, user);
    return response.data;
  }


  
}

export default new UsersRepository();
