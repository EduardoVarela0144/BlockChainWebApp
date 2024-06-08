import React from "react";
import { Card, Col, Progress } from "antd";

export default function CardsStats({ title, percent, color }) {
  return (
      <Card title={title} bordered={false} >
        <Progress type="circle"  trailColor={color} strokeColor={'#e4e4e7'} percent={percent} />
      </Card>

  );
}
