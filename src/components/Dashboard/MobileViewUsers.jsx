import React from "react";
import UserCard from "@components/Dashboard/UserCard";
import { Col, Row } from "antd";
import SkeletonUsers from "./Skeleton";

export default function MobileViewUsers({ data, isFetching, refetch }) {
  const skeletons = Array.from({ length: 6 }, (_, index) => (
    <Col key={index} xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
      <SkeletonUsers />
    </Col>
  ));
  return (
    <div className="space-y-2 w-full">
      <Row gutter={[16, 16]} className="flex lg:hidden  w-full">
        {data.map((user, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <UserCard user={user._source} refetch={refetch} />
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} className="flex lg:hidden">
        {isFetching && skeletons}
      </Row>
    </div>
  );
}
