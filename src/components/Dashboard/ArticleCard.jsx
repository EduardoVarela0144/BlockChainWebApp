import React from "react";
import { Card } from "antd";
import SeeArticleButton from "@components/Dashboard/SeeArticleButton";
import OpenLinkButton from "@components/Dashboard/OpenLinkButton";
const ArticleCard = ({ article }) => {

  const {
    id_article,
    title,

    authors,
    journal,
    abstract,
    doi,
    issn,
    year,
    url,
    pmc_id,
  } = article;

  return (
    <Card title={title || "Título no disponible"}>
      <div className="mb-4 flex  justify-between">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-2">
            <p className="font-bold">PMC ID:</p>
            <p className="">{pmc_id}</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-bold">ISSN:</p>
            <p className="">{issn}</p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-bold">DOI:</p>
            <p className="">{doi}</p>
          </div>
        </div>

        <div className="flex flex-row space-x-2">
          <p className="font-bold">Año:</p>
          <p className="">{year}</p>
        </div>
      </div>

      <div className="mb-4 flex  justify-between">
        <div className="flex flex-row space-x-2">
          <p className="font-bold">Autores:</p>
          <p className="">{authors.join(", ")}</p>
        </div>
        <div className="flex flex-row space-x-2">
          <p className="font-bold">Diario:</p>
          <p className="">{journal}</p>
        </div>
      </div>

      <p className="line-clamp-5">{abstract}</p>
      <div className="flex flex-row items-end justify-end space-x-4 py-4">
        <OpenLinkButton url={url} />
        <SeeArticleButton id={id_article} />
      </div>
    </Card>
  );
};

export default ArticleCard;
