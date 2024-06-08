import api from "@services/api";

class UsersRepository {
  async getUsers(params) {
    const response = await api.get(`/users`, { params });
    return response.data;
  }

  async getStats() {
    const response = await api.get(`/statistics`);
    return response.data;
  }

  async postUser(user) {
    const response = await api.post(`/users`, user);
    return response.data;
  }

  async deleteUser(id) {
    const response = await api.delete(`/users/${id}`, id);
    return response.data;
  }
  async getUserById(id) {
    const response = await api.get(`/users/${id}`, id);
    return response.data;
  }

  async updateUser(user) {
    const response = await api.put(`/users/${user.id}`, user);
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
