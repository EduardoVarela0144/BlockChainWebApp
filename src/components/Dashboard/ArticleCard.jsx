import React from "react";
import { Card } from "antd";
import DeleteModal from "@components/Dashboard/DeleteModal";
import EditButton from "@components/Dashboard/EditButton";

const ArticleCard = ({ article, refetch }) => {
  const { title, id_article, content } = article;

  return (
    <Card title={title || "Título no disponible"}>
      <p className="line-clamp-5">{content}</p>
      <div className="flex flex-row items-center space-x-4 py-4">
        {/* <EditButton id={id} />
      <DeleteModal name={user?.firstName} refetch={refetch} id={id} /> */}
      </div>
    </Card>
  );
};

export default ArticleCard;
