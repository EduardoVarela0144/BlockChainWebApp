import React from "react";
import { Layout, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import UserForm from "@components/Forms/UserForm";

export default function EditUser() {
  const { Content } = Layout;
  const breadCrumbItems = [
    {
      href: "/Dashboard/Users",
      title: (
        <>
          <UserOutlined />
          <span>Usuarios Tabla</span>
        </>
      ),
    },
    {
      title: "Editar Usuario",
    },
  ];

  return (
    <Layout className="flex-1 flex h-full">
      <Content className="bg-slate-200 h-full flex flex-col items-start justify-center px-8 py-4 space-y-8 overflow-auto">
        <div className="w-full">
          <Breadcrumb items={breadCrumbItems} style={{ marginBottom: 20 }} />
          <UserForm isEdit />
        </div>
      </Content>
    </Layout>
  );
}
