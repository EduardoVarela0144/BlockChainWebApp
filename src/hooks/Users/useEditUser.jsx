import { useMutation } from "react-query";
import UsersRepository from "@repositories/UsersRepository";
import { notification } from "antd";

function useEditUser() {
  const mutation = useMutation(UsersRepository.updateUser);

  const editUser = async (data) => {
    try {
      const response = await mutation.mutateAsync(data);

      notification.success({
        message: "Usuario editado",
        description: "El usuario ha sido editado exitosamente.",
        placement: "topRight",
      });



      return response;
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Error al editar usuario",
        description: `Ha ocurrido un error al intentar editar el usuario: ${error?.response?.data?.error}`,
        placement: "topRight",
      });

      return null;
    }
  };

  return { editUser, isLoading: mutation.isLoading };
}

export { useEditUser };
