import React from "react";
import { Form, Input, Button } from "antd";
import { usePostStudent } from "@hooks/Students/usePostStudent";
import { useNavigate } from "react-router-dom";

export default function StudentForm({ isAdd, isEdit }) {
  const navigate = useNavigate();
  const { postStudent } = usePostStudent();
  
  const onFinish = async (values) => {
    await postStudent(values);

    setTimeout(() => {
      navigate("/Dashboard/Students");
    }, 1000);
  };

  return (
    <Form
      name="student-form"
      onFinish={onFinish}
      layout="vertical"
      initialValues={{ remember: true }}
      style={{ width: "100%", margin: "0 auto" }}
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: "Por favor ingrese el nombre" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Grado"
        name="grade"
        rules={[{ required: true, message: "Por favor ingrese el grado" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Edad"
        name="age"
        rules={[{ required: true, message: "Por favor ingrese la edad" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="my-4">
          {isAdd ? "Agregar" : "Editar"}
        </Button>
      </Form.Item>
    </Form>
  );
}
