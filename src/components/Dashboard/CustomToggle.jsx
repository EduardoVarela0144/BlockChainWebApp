import React from "react";
import { Switch } from "antd";
import { useToggleStatus } from "@hooks/Users/useToggleStatus";

export default function CustomToggle({ status, refetch, id }) {
  const { toggleStatus } = useToggleStatus();

  const onChange = async () => {
    await toggleStatus(id);
    refetch();
  };

  return <Switch checked={status} onChange={onChange} />;
}
