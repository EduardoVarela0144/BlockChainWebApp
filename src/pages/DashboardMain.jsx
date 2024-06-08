import React from "react";
import { Layout } from "antd";
import StatsCard from "@components/Dashboard/StatsCard";
import { useGetStats } from "@hooks/Users/useGetStats";
import Loader from "@components/General/Loader";

export default function DashboardMain() {
  const { Content } = Layout;
  
  const { data , isFetching } = useGetStats()

  if (isFetching) {
    return <Loader />;
  }

  return (
    <Layout className="flex-1 flex h-full">
      <Content className="bg-slate-200 h-full flex flex-col items-start justify-center px-8 py-4 space-y-8">
        <span className="text-left text-BC text-4xl font-bold">
          Estadísticas
        </span>
        <div className="flex flex-col md:flex-row w-full space-y-2 md:space-y-0 md:space-x-4">
          <StatsCard
            title="Estadísticas de usuarios activos"
            data={data?.filter((item) => item?.status)}
          />
          <StatsCard
            title="Estadísticas de Roles"
            data={data?.filter((item) => item?.role)}
          />
        </div>
      </Content>
    </Layout>
  );
}
