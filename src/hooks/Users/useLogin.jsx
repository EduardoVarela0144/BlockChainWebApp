import { useContext } from "react";
import { useMutation } from "react-query";
import UsersRepository from "@repositories/UsersRepository";
import { notification } from "antd";
import { AuthContext } from "@context/AuthContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@services/api";

function useLogin() {
  const mutation = useMutation(UsersRepository.login);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const login = async (data) => {
    try {
      const response = await mutation.mutateAsync(data);
      setAuth(response);

      axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + response.token;

      navigate("/Dashboard");

      

      notification.success({
        message: "Inicio de sesión exitoso.",
        description: "Has iniciado sesión de manera correcta.",
        placement: "topRight",
      });

      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Error al iniciar sesión",
        description: `Ha ocurrido un error al iniciar sesión: ${error?.response?.data?.error}`,
        placement: "topRight",
      });

      return null;
    }
  };

  return { login, isLoading: mutation.isLoading };
}

export { useLogin };
