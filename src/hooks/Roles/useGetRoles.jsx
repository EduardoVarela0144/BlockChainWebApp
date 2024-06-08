import { useQuery } from "react-query";
import RolesRepository from "@repositories/RolesRepository";

function useGetRoles() {
  return useQuery(["useGetRoles"], () => RolesRepository.getRoles());
}
export { useGetRoles};
