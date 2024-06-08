import React from "react";
import { Progress, Card } from "antd";

export default function StatsCard({ title, data }) {
  return (
    <Card title={title} className="md:w-[300] w-full">
      {data.map((item, index) => (
        <div key={index}>
          {item.status && (
            <div>
              {item.status}: <Progress percent={item.percentage} />
            </div>
          )}
          {item.role && (
            <div>
              {item.role}: <Progress percent={item.percentage} />
            </div>
          )}
        </div>
      ))}
    </Card>
  );
}
