import { useQuery } from "react-query";
import ArticlesRepository from "@repositories/ArticlesRepository";

function useGetSemanticSearch(values) {
  return useQuery(["useGetSemanticSearch", values], () => ArticlesRepository.semanticSearch(values));
}
export { useGetSemanticSearch};
