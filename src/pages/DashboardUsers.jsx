import React, { useState } from "react";
import { Layout, Table, Button } from "antd";
import { ColumnsTableUsers } from "@constants/ColumnsTableUsers";
import Loader from "@components/General/Loader";
import MobileViewUsers from "@components/Dashboard/MobileViewUsers";
import { useGetUsers } from "@hooks/Users/useGetUsers";
import { useNavigate } from "react-router-dom";
export default function DashboardUsers() {
  const { Content } = Layout;
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useGetUsers();

  const [loading, setLoading] = useState(false);

  const handleRefetch = () => {
    setLoading(true);

    setTimeout(() => {
      refetch();

      setLoading(false);
    }, 1000);
  };

  if (isLoading || loading) {
    return <Loader />;
  }

  return (
    <Layout className="flex-1 flex h-full">
      <Content className="bg-slate-200 h-full flex flex-col items-start justify-start px-8 py-4 space-y-8 overflow-auto">
        <span className="text-left text-BC text-4xl font-bold">Usuarios</span>
        <div>
          <Button
            onClick={() => navigate("/Dashboard/AddUser")}
            className="bg-BC w-[100%] md:w-auto"
            type="primary"
          >
            Agregar un nuevo usuario
          </Button>
        </div>
        {!isLoading && (
          <>
            <Table
              pagination={false}
              className="w-full hidden lg:table"
              columns={ColumnsTableUsers(handleRefetch)}
              dataSource={data?.hits.hits}
              rowKey={(record) => record?._id}
              style={{ minWidth: "100%", width: "100%" }}
            />
            <MobileViewUsers
              data={data?.hits.hits}
              isFetching={isLoading}
              refetch={refetch}
            />
          </>
        )}
      </Content>
    </Layout>
  );
}
