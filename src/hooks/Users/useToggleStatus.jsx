import { useMutation } from "react-query";
import UsersRepository from "@repositories/UsersRepository";
import { notification } from "antd";

function useToggleStatus() {
  const mutation = useMutation(UsersRepository.toglleUserStatus);

  const toggleStatus = async (data) => {
    try {
      const response = await mutation.mutateAsync(data);

      notification.success({
        message: "Usuario actualizado",
        description: "El usuario ha sido actualizado exitosamente.",
        placement: "topRight",
      });

      return response;
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Error al cambiar el estatus",
        description: "Ha ocurrido un error al cambiar el estatus del usuario.",
        placement: "topRight",
      });

      return null;
    }
  };

  return { toggleStatus, isLoading: mutation.isLoading };
}

export { useToggleStatus };
