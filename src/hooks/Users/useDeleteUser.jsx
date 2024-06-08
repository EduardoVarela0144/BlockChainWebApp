import { useMutation } from "react-query";
import UsersRepository from "@repositories/UsersRepository";
import { notification } from "antd";

function useDeleteUser() {
  const mutation = useMutation(UsersRepository.deleteUser);

  const deleteUser = async (data) => {
    try {
      const response = await mutation.mutateAsync(data);

      notification.success({
        message: "Usuario eliminado",
        description: "El usuario ha sido eliminado exitosamente.",
        placement: "topRight",
      });

      return response;
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Error al eliminar usuario",
        description: "Ha ocurrido un error al intentar eliminar el usuario.",
        placement: "topRight",
      });

      return null;
    }
  };

  return { deleteUser, isLoading: mutation.isLoading };
}

export { useDeleteUser };
