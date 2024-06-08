import React from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { selectFormRolesMockData } from "@mocks/mocksData";
import { useAddUser } from "@hooks/Users/useAddUser";
import { useEditUser } from "@hooks/Users/useEditUser";
import { useParams } from "react-router-dom";
import { useGetUserById } from "@hooks/Users/useGetUserById";
import Loader from "@components/General/Loader";
import moment from "moment";
import { useRegister } from "@hooks/Users/useRegister";

export default function UserForm({ isAdd, isEdit }) {
  const navigate = useNavigate();

  const { addUser } = useAddUser();
  const { editUser } = useEditUser();
  const { register } = useRegister();

  const onFinish = async (values) => {

    if (!isEdit && !isAdd) {
      register(values);
    } else if (isEdit) {
      await editUser(values);
    } else {
      await addUser(values);
    }

    if (!isEdit && !isAdd) {
      navigate("/Pending");
    } else {
      navigate("/Dashboard/Users");
    }
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { id } = useParams();

  const { data, isFetching } = useGetUserById(id);

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
              className="bg-KarimNot md:hidden flex"
              shape="circle"
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate("/")}
            />
            <span className="opacity-100 text-center text-[10px] md:text-lg text-KarimNot font-bold ">
              Solicita al administrador activar tu cuenta.
            </span>
          </div>
        </Form.Item>
      )}

      {isEdit && (
        <Form.Item
          hidden={isEdit ? true : false}
          label="Id"
          name="id"
          initialValue={data?.id || ""}
        >
          <Input />
        </Form.Item>
      )}

      <Form.Item
        label="Nombre"
        name="firstName"
        initialValue={data?.firstName || ""}
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
        label="Apellido Paterno"
        name="lastName"
        initialValue={data?.lastName || ""}
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu apellido paterno.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Apellido Materno"
        name="middleName"
        initialValue={data?.middleName || ""}
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu apellido materno.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={data?.email || ""}
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
        label="Número de teléfono"
        name="phoneNumber"
        initialValue={data?.phoneNumber || ""}
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu número de teléfono.",
          },
          {
            pattern: /^[\d+-]+$/,
            message: "Por favor ingresa solo números, + y -.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className={`${!isEdit ? "hidden" : "inline-block w-full"}`}
        label="Estatus"
        name="status"
        initialValue={!isEdit && !isAdd ? false : isEdit ? data?.status : true}
        rules={[
          {
            required: true,
            message: "Por favor selecciona un estatus",
          },
        ]}
      >
        <Select>
          <Option value={true}>Activo</Option>
          <Option value={false}>Inactivo</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Contraseña"
        initialValue={data?.password || ""}
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
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="birthDate"
        initialValue={
          data?.birthDate ? moment(data.birthDate, "YYYY-MM-DD") : null
        }
        label="Selecciona tu fecha de nacimiento"
        rules={[
          {
            required: true,
            message: "Por favor selecciona tu fecha de nacimiento.",
          },
        ]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      {(isEdit || isAdd) && (
        <Form.Item
          name="roleId"
          label="Selecciona un rol"
          initialValue={data?.roleId || ""}
          rules={[
            {
              required: true,
              message: "Por favor selecciona un rol",
            },
          ]}
        >
          <Select onChange={handleChange} options={selectFormRolesMockData} />
        </Form.Item>
      )}

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
