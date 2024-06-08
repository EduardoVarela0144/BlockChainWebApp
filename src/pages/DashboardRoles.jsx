import React from "react";
import { Layout, Table } from "antd";
import { ColumnsTableRoles } from "@constants/ColumnsTableRoles";
import {  rolesMockData  } from "../mocks/mocksData";
import Loader from "@components/General/Loader";
import MobileViewRoles from "@components/Dashboard/MobileViewRoles";
import { useGetRoles } from "@hooks/Roles/useGetRoles";

export default function DashboardRoles() {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const { Content } = Layout;

  const { data, isFetching } = useGetRoles() 

  if (isFetching) {
    return <Loader />;
  }

  return (
    <Layout className="flex-1 flex h-full">
      <Content className="bg-slate-200 h-full  flex flex-col items-start justify-center px-8 py-4 space-y-8">
        <span className="text-left text-BC text-4xl font-bold">
          Roles
        </span>
        <Table
          className="w-full  hidden lg:flex"
          columns={ColumnsTableRoles}
          dataSource={data}
          onChange={onChange}
          pagination={false}
        />
        <MobileViewRoles data={data} isFetching={isFetching}/>
      </Content>
    </Layout>
  );
}
