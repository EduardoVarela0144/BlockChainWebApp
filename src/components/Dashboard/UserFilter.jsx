import React from "react";
import { selectRolesMockData } from "@mocks/mocksData";
import { Button, Form, Select, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function UserFilter({handleSearchChange, handleCleanSearch}) {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onFinish = (values) => {
    handleSearchChange(values)
  };

  const handleClean = () => {
    form.resetFields();
    handleCleanSearch();
  };

 
  return (
    <div className="w-full space-y-8">
      <span className="text-left text-BC text-4xl font-bold">
        Usuarios
      </span>
      <div className="w-full flex flex-row space-x-4">
        <Form
          form={form}
          layout="inline"
          className="w-full items-end"
          labelAlign="top"
          onFinish={onFinish}
        >
          <div className="w-[100%] lg:w-[35%]">
            <span className="ml-1 font-bold">Seleccionar rol</span>
            <Form.Item name="rol" initialValue="">
              <Select options={selectRolesMockData} />
            </Form.Item>
          </div>

          <div className="w-[100%] lg:w-[35%]">
            <span className="ml-1 font-bold">Buscar usuario</span>
            <Form.Item name="user">
              <Input placeholder="Nombre o correo electrónico" />
            </Form.Item>
          </div>

          <Form.Item className="w-[95%] lg:w-[10%] my-4 lg:my-0">
            <Button onClick={() => handleClean()} className="bg-BC w-full" type="primary">
              Limpiar
            </Button>
          </Form.Item>

          <Form.Item className="w-[95%] lg:w-[10%] my-4 lg:my-0">
            <Button
              style={{ borderColor: "#008FD1", color: "#008FD1" }}
              className="w-full"
              htmlType="submit"
              type="primary"
              ghost
            >
              Buscar
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <Button
          onClick={() => navigate("/Dashboard/AddUser")}
          className="bg-BC w-[95%] md:w-auto"
          type="primary"
        >
          Agregar un nuevo usuario
        </Button>
      </div>
    </div>
  );
}
