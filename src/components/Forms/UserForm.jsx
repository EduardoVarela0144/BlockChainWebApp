import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useAddUser } from "@hooks/Users/useAddUser";
import { useEditUser } from "@hooks/Users/useEditUser";
import { useParams } from "react-router-dom";
import { useGetUserById } from "@hooks/Users/useGetUserById";
import Loader from "@components/General/Loader";
import { useRegister } from "@hooks/Users/useRegister";

export default function UserForm({ isAdd, isEdit }) {
  const navigate = useNavigate();

  const { addUser } = useAddUser();
  const { editUser } = useEditUser();
  const { register } = useRegister();

  const onFinish = async (values) => {
    if (!isEdit && !isAdd) {
      await register(values);
    } else if (isEdit) {
      await editUser(values);
    } else {
      await addUser(values);
    }

    if (!isEdit && !isAdd) {
      navigate("/Dashboard/Users");
    } else {
      navigate("/Dashboard/Users");
    }
  };


  const { id } = useParams();

  const { data, isFetching } = useGetUserById(id);

  console.log(data);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <Form
      name="login-form"
      onFinish={onFinish}
      layout="vertical"
      initialValues={{ remember: true }}
      style={{ width: "100%", margin: "0 auto" }}
    >
      {!isEdit && !isAdd && (
        <Form.Item className="flex flex-row">
          <div className="flex flex-row  space-x-2 items-center justify-center">
            <Button
              type="primary"
              className="bg-BC md:hidden flex"
              shape="circle"
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate("/")}
            />
            <span className="opacity-100 text-center text-[10px] md:text-lg text-BC font-bold ">
              Comienza a usar nuestra aplicación
            </span>
          </div>
        </Form.Item>
      )}

      {isEdit && (
        <Form.Item
          hidden={isEdit ? true : false}
          label="Id"
          name="id"
          initialValue={data?._id || ""}
        >
          <Input />
        </Form.Item>
      )}

      <Form.Item
        label="Nombre"
        name="name"
        initialValue={data?._source?.name || ""}
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu nombre.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Apellidos"
        name="lastname"
        initialValue={data?._source?.lastname || ""}
        rules={[
          {
            required: true,
            message: "Por favor ingresa tus apellidos.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={data?._source?.email || ""}
        label="Correo electrónico"
        name="email"
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu correo electrónico.",
          },
          {
            type: "email",
            message: "Por favor ingresa un correo electrónico válido.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        initialValue={data?._source?.password || ""}
        name="password"
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu contraseña.",
          },
          {
            min: 8,
            message: "La contraseña debe tener al menos 8 caracteres.",
          },
          {
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^a-zA-Z\d]).{8,}$/,
            message:
              "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.",
          },
        ]}
      >
        <Input.Password disabled={isEdit ? true : false}/>
      </Form.Item>

      <Form.Item>
        <Button
          style={{ backgroundColor: "#008FD1" }}
          type="primary"
          htmlType="submit"
          className="w-full my-4"
        >
          {isEdit || isAdd ? "Guardar" : "Registrarse"}
        </Button>
      </Form.Item>
    </Form>
  );
}
