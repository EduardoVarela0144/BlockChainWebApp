import { useQuery } from "react-query";
import UsersRepository from "@repositories/UsersRepository";

function useGetUsers( params) {
  return useQuery(["useGetUsers", params], () => UsersRepository.getUsers(params));
}
export { useGetUsers };
