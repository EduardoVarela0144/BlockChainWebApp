import { useQuery } from "react-query";
import ArticlesRepository from "@repositories/ArticlesRepository";

function useGetSemanticSearch(values) {
  const shouldFetch = values.query !== undefined && values.query !== null && values.query.trim() !== "";

  return useQuery(
    ["useGetSemanticSearch", values],
    () => (shouldFetch ? ArticlesRepository.semanticSearch(values) : null),
    {
      enabled: shouldFetch,
    }
  );
}

export { useGetSemanticSearch };
