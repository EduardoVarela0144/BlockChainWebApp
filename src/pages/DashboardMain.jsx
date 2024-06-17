import React from "react";
import { Layout, Col, Row } from "antd";
import StatsCard from "@components/Dashboard/StatsCard";
import { useGetStats } from "@hooks/Users/useGetStats";
import Loader from "@components/General/Loader";
import SkeletonUsers from "@components/Dashboard/Skeleton";

export default function DashboardMain() {
  const { Content } = Layout;

  const { data, isFetching } = useGetStats();

  // if (isFetching) {
  //   return <Loader />;
  // }

  const skeletons = Array.from({ length: 6 }, (_, index) => (
    <Col key={index} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
      <SkeletonUsers />
    </Col>
  ));

  return (
    <Layout className="flex-1 flex h-full">
      <Content className="bg-slate-200 h-full flex flex-col items-start justify-start px-8 py-4 space-y-8">
        <span className="text-left text-BC text-4xl font-bold">
          Estadísticas
        </span>
        <div className="flex flex-col md:flex-row w-full space-y-2 md:space-y-0 md:space-x-4">
          {isFetching ? (
            <Row gutter={[16, 16]} className="flex w-full">
              {skeletons}
            </Row>
          ) : (
            <>
              <StatsCard title="Artículos Publicados" data={data?.articles} />
              {/* <StatsCard title="Tripletas Registrados" data={data?.triplets} /> */}
              <StatsCard title="Usuarios Registrados" data={data?.users} />
            </>
          )}
        </div>
      </Content>
    </Layout>
  );
}
