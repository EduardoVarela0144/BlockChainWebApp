import React from "react";
import { Card } from 'antd';

export default function SkeletonUsers() {
  return (
    <Card>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-xs bg-zinc-300 h-32 md:h-46 w-1/2" />
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-3 h-full ">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-zinc-300 rounded col-span-1" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-zinc-300 rounded col-span-2" />
            </div>
            <div className="h-2 bg-white-700 rounded" />
            <div className="h-2 bg-zinc-300 rounded" />
            <div className="h-2 bg-zinc-300 rounded" />
            <div className="h-2 bg-zinc-300 rounded" />
          </div>
        </div>
      </div>
    </Card>
  );
}
