import React from "react";
import { Layout, Card } from "antd";
import { useParams } from "react-router-dom";
import { useGetArticleById } from "@hooks/Articles/useGetArticleById";
import Loader from "@components/General/Loader";

export default function SeeArticle() {
  const { Content } = Layout;
  const { id } = useParams();

  const { data, isFetching } = useGetArticleById(id);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <Layout className="flex-1 flex h-full">
      <Content className="bg-slate-200 h-full flex flex-col items-start justify-center px-8 py-4 space-y-8 overflow-auto">
        <Card
          title={data?.title || "Título no disponible"}
          bordered={false}
          className="w-full"
        >
          <div className="mb-4">
            <p className="font-bold">Autores</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.authors || "Contenido no disponible"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Journal</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.journal || "Contenido no disponible"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Resumen</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.abstract || "Contenido no disponible"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">DOI</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.doi || "Contenido no disponible"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">ISSN</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.issn || "Contenido no disponible"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Año</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.year || "Contenido no disponible"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Volumen</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.volume || "Contenido no disponible"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Número</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.issue || "Contenido no disponible"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Páginas</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.pages || "Contenido no disponible"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">URL</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.url || "Contenido no disponible"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">PMC ID</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.pmc_id || "Contenido no disponible"}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Contenido</p>
            <p className="line-clamp-5 text-justify text-sm">
              {data?.content || "Contenido no disponible"}
            </p>
          </div>
        </Card>
      </Content>
    </Layout>
  );
}
