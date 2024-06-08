import { useMutation } from "react-query";
import UsersRepository from "@repositories/UsersRepository";
import { notification } from "antd";

function useAddUser() {
  const mutation = useMutation(UsersRepository.postUser);

  const addUser = async (data) => {
    try {
      const response = await mutation.mutateAsync(data);

      notification.success({
        message: "Usuario agregado",
        description: "El usuario ha sido agregado exitosamente.",
        placement: "topRight",
      });

      return response;
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Error al agregar al usuario",
        description: `Ha ocurrido un error al intentar agregar al usuario: ${error?.response?.data?.error}`,
        placement: "topRight",
      });

      return null;
    }
  };

  return { addUser, isLoading: mutation.isLoading };
}

export { useAddUser };
