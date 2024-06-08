import { useQuery } from "react-query";
import UsersRepository from "@repositories/UsersRepository";

function useGetUserById(id) {
  const shouldFetch = id !== undefined && id !== null;

  return useQuery(
    ["useGetUserById", id],
    () => (shouldFetch ? UsersRepository.getUserById(id) : null),
    {
      enabled: shouldFetch,
    }
  );
}

export { useGetUserById };
