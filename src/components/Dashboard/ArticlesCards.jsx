import React from "react";
import { Col, Row } from "antd";
import SkeletonUsers from "@components/Dashboard/Skeleton";
import ArticleCard from "@components/Dashboard/ArticleCard";

export default function ArticlesCards({ data, isFetching, refetch }) {
  const skeletons = Array.from({ length: 6 }, (_, index) => (
    <Col key={index} xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
      <SkeletonUsers />
    </Col>
  ));
  return (
    <div className="space-y-2  w-full">
      <Row gutter={[0, 16]} className=" w-full">
        {data.map((article, index) => (
          <Col key={index} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <ArticleCard article={article} />
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} className="flex lg:hidden">
        {isFetching && skeletons}
      </Row>
    </div>
  );
}
