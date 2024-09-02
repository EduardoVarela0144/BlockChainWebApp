import React, { useState } from "react";
import { Layout, Table, Button } from "antd";
import Loader from "@components/General/Loader";
import { useGetStudents } from "@hooks/Students/useGetStudents";
import { useNavigate } from "react-router-dom";
import  { ColumnsTableStudents } from "@constants/ColumnsTableStudents";
export default function Students() {
  const [filter, setFilter] = useState("");
  const { data, isLoading } = useGetStudents({ query: filter });
  const  navigate  = useNavigate();
  const { Content } = Layout;

  if (isLoading) {
    return <Loader />;
  }


  return (
    <Layout className="flex-1 flex h-full">
      <Content className="bg-slate-200 h-full flex flex-col items-start justify-start px-8 py-4 space-y-8 overflow-auto">
        <span className="text-left text-BC text-4xl font-bold ">
          Estudiantes
        </span>
        <div>
          <Button
            onClick={() => navigate("/Dashboard/AddStudent")}
            className="bg-BC w-[100%]"
            type="primary"
          >
            Agregar un nuevo estudiante
          </Button>
        </div>
        {
          !isLoading && (
            <Table
              pagination={false}
              className="w-full"
              columns={ColumnsTableStudents()}
              dataSource={data}
              rowKey={(record) => record.id}
              style={{ minWidth: "100%", width: "100%" }}
            />
          )
        }
      </Content>
    </Layout>
  );
}
