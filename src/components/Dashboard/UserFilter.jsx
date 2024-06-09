import React from "react";
import { selectRolesMockData } from "@mocks/mocksData";
import { Button, Form, Select, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function UserFilter({ handleSearchChange, handleCleanSearch }) {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onFinish = (values) => {
    handleSearchChange(values);
  };

  const handleClean = () => {
    form.resetFields();
    handleCleanSearch();
  };

  return (
    <div className="w-full space-y-8">
      <span className="text-left text-BC text-4xl font-bold">Usuarios</span>
      <div className="w-full flex flex-row ">
        <Form
          form={form}
          layout="inline"
          className="w-full items-end space-y-4  lg:space-y-0 lg:space-x-2 "
          labelAlign="top"
          onFinish={onFinish}
        >
          

          <div className="w-[100%]  lg:flex-1">
            <span className="ml-1 font-bold">Buscar usuario</span>
            <Form.Item name="user" className="w-[100%]">
              <Input placeholder="Nombre o correo electrónico" />
            </Form.Item>
          </div>

          <div className="w-[100%] lg:w-[10%]">
            <Form.Item className="w-[100%] lg:my-0">
              <Button
                onClick={() => handleClean()}
                className="bg-BC w-full"
                type="primary"
              >
                Limpiar
              </Button>
            </Form.Item>
          </div>

          <div className="w-[100%] lg:w-[10%]">
            <Form.Item className="w-[100%]  lg:my-0">
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
          </div>
          
        </Form>
      </div>
      <div>
        <Button
          onClick={() => navigate("/Dashboard/AddUser")}
          className="bg-BC w-[100%] md:w-auto"
          type="primary"
        >
          Agregar un nuevo usuario
        </Button>
      </div>
    </div>
  );
}
