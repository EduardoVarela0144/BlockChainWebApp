import { useQuery } from "react-query";
import ArticlesRepository from "@repositories/ArticlesRepository";

function useGetExample() {
  return useQuery(["useGetExample"], () => ArticlesRepository.getExample());
}
export { useGetExample};
