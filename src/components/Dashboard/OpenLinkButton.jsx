import React from "react";
import { Button } from "antd";

export default function OpenLinkButton({ url }) {
  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={() => openInNewTab(url)}
      style={{ backgroundColor: "#008FD1" }}
      type="primary"
    >
      Ver articulo en pubmed
    </Button>
  );
}
