import React from "react";
import { Button, Form, Input, Slider } from "antd";

export default function ArticleFilter({
  handleSearchChange,
  handleCleanSearch,
}) {
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
      <span className="text-left text-BC text-4xl font-bold">
        Búsqueda de artículos
      </span>
      <div className="w-full flex flex-row ">
        <Form
          form={form}
          layout="inline"
          className="w-full items-end space-y-4  lg:space-y-2 "
          labelAlign="top"
          onFinish={onFinish}
        >
          <div className="w-[100%]  ">
            <span className="ml-1 font-bold">Buscar un artículo</span>
            <Form.Item name="query" className="w-[100%]">
              <Input placeholder="Necesito información de ..." />
            </Form.Item>
          </div>

          <div className="w-[100%]  ">
            <span className="ml-1 font-bold">Número de artículos</span>
            <Form.Item name="top_k" className="w-[100%]">
              <Slider defaultValue={10} />
            </Form.Item>
          </div>

          <div className="w-[100%] lg:w-[10%] lg:mr-4">
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
    </div>
  );
}
