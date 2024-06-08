import api from "@services/api";

class RolesRepository {
  async getRoles() {
    const response = await api.get(`/roles`);
    return response.data;
  }

}

export default new RolesRepository();
