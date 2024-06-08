import React from "react";
import { Layout } from "antd";
import StatsCard from "@components/Dashboard/StatsCard";
import { useGetStats } from "@hooks/Users/useGetStats";
import Loader from "@components/General/Loader";

export default function DashboardMain() {
  const { Content } = Layout;

  const { data, isFetching } = useGetStats();

  if (isFetching) {
    return <Loader />;
  }

  return (
    <Layout className="flex-1 flex h-full">
      <Content className="bg-slate-200 h-full flex flex-col items-start justify-start px-8 py-4 space-y-8">
        <span className="text-left text-BC text-4xl font-bold">
          Estadísticas
        </span>
        <div className="flex flex-col md:flex-row w-full space-y-2 md:space-y-0 md:space-x-4">
          <StatsCard
            title="Artículos Publicados"
            data={data?.articles}
          />
          <StatsCard
            title="Tripletas Registrados"
            data={data?.triplets}
          />
          <StatsCard
            title="Usuarios Registrados"
            data={data?.users}
          />
        </div>
      </Content>
    </Layout>
  );
}
