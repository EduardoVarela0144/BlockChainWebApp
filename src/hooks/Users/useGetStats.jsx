import { useQuery } from "react-query";
import UsersRepository from "@repositories/UsersRepository";

function useGetStats() {
  return useQuery(["useGetStats"], () => UsersRepository.getStats());
}
export { useGetStats};
