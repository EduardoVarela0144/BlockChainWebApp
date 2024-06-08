import React from "react";
import { Progress, Card, Statistic } from "antd";
import CountUp from "react-countup";

export default function StatsCard({ title, data }) {
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <Card title={title} className="md:w-[300] w-full">
      <Statistic title={title} value={data} formatter={formatter} />
    </Card>
  );
}
