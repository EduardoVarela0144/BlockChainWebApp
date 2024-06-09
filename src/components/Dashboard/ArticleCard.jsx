import React from "react";
import { Card } from "antd";
import SeeArticleButton from "@components/Dashboard/SeeArticleButton";

const ArticleCard = ({ article }) => {
  const { title, id_article, content } = article;

  return (
    <Card title={title || "Título no disponible"}>
      <p className="line-clamp-5">{content}</p>
      <div className="flex flex-row items-end justify-end space-x-4 py-4">
        <SeeArticleButton id={id_article} />
      </div>
    </Card>
  );
};

export default ArticleCard;
