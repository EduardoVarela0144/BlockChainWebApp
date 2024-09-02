import React from "react";
import { Layout, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import StudentForm from "@components/Forms/StudentForm";
export default function AddStudent() {
  const { Content } = Layout;
  const breadCrumbItems = [
    {
      href: "/Dashboard/Students",
      title: (
        <>
          <UserOutlined />
          <span>Estudiantes Tabla</span>
        </>
      ),
    },
    {
      title: "Añadir Student",
    },
  ];
  return (
    <Layout className="flex-1 flex h-full">
      <Content className="bg-slate-200 h-full flex flex-col items-start justify-center px-12 space-y-8">
        <div className="w-full">
          <Breadcrumb items={breadCrumbItems} style={{ marginBottom: 20 }} />
          <StudentForm isAdd />
        </div>
      </Content>
    </Layout>
  );
}
