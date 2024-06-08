import { useMutation } from "react-query";
import UsersRepository from "@repositories/UsersRepository";
import { notification } from "antd";

function useRegister() {
  const mutation = useMutation(UsersRepository.register);

  const register = async (data) => {
    try {
      const response = await mutation.mutateAsync(data);

      notification.success({
        message: "Registro exitoso",
        description: "El usuario se registro exitosamente.",
        placement: "topRight",
      });

      return response;
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Error al registrar el usuario",
        description: `Ha ocurrido un error al intentar registrar al usuario: ${error?.response?.data?.error}`,
        placement: "topRight",
      });

      return null;
    }
  };

  return { register, isLoading: mutation.isLoading };
}

export { useRegister };
