import api from "@services/api";
class ArticlesRepository {
  async semanticSearch(params) {
    const response = await api.get(`/article/articles_semantic_search`, { params });
    return response.data;
  }

  async getArticle(id){
    const response = await api.get(`/article/${id}`);
    return response.data;
  }
}

export default new ArticlesRepository();
