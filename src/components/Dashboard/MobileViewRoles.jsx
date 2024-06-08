import React from "react";
import RoleCard from "@components/Dashboard/RoleCard";
import { Col, Row } from "antd";
import SkeletonUsers from "./Skeleton";

export default function MobileViewRoles({ data, isFetching }) {
  const skeletons = Array.from({ length: 6 }, (_, index) => (
    <Col key={index} xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
      <SkeletonUsers />
    </Col>
  ));
  return (
    <div className="space-y-2">
      <Row gutter={[16, 16]} className="flex lg:hidden">
        {data.map((role, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <RoleCard role={role} />
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]} className="flex lg:hidden">
      {isFetching && skeletons}
      </Row>
    </div>
  );
}
