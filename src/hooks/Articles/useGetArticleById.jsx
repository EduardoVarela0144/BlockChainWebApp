import { useQuery } from "react-query";
import ArticlesRepository from "@repositories/ArticlesRepository";

function useGetArticleById(id) {
  const shouldFetch = id !== undefined && id !== null;

  return useQuery(
    ["usGetArticleById", id],
    () => (shouldFetch ? ArticlesRepository.getArticle(id) : null),
    {
      enabled: shouldFetch,
    }
  );
}

export { useGetArticleById };
