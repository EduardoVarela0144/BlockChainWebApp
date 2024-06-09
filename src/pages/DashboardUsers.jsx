import React  from "react";
import { Layout, Table, Button } from "antd";
import { ColumnsTableUsers } from "@constants/ColumnsTableUsers";
import Loader from "@components/General/Loader";
import MobileViewUsers from "@components/Dashboard/MobileViewUsers";
import { useGetUsers } from "@hooks/Users/useGetUsers";
import { useNavigate

 } from "react-router-dom";
export default function DashboardUsers() {
  const { Content } = Layout;
  const navigate = useNavigate();

  const { data, isFetching, refetch } = useGetUsers();

  const handleRefetch = () => {
    refetch();
  };

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
        {isFetching ? (
          <Loader />
        ) : (
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
              isFetching={isFetching}
              refetch={refetch}
            />
          </>
        )}
      </Content>
    </Layout>
  );
}
