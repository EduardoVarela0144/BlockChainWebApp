import React, { useState } from "react";
import { Layout, Pagination } from "antd";
import Loader from "@components/General/Loader";
import ArticlesCards from "@components/Dashboard/ArticlesCards";
import { useGetSemanticSearch } from "@hooks/Articles/useGetSemanticSearch";

import ArticleFilter from "@components/Dashboard/ArticleFilter";

export default function SemanticSearchArticles() {
  const { Content } = Layout;

  const [filter, setFilter] = useState({ query: "", page: 1 });

  const { data, isFetching, refetch } = useGetSemanticSearch(filter);

  const handlePageChange = (newPage) => {
    if (newPage != filter.page) {
      setFilter({ ...filter, page: newPage });
    }
  };

  const handleSearchChange = (data) => {
    const updatedFilter = { ...filter };

    updatedFilter.query = data.query || "";
    updatedFilter.page = 1;

    setFilter(updatedFilter);
  };

  const handleCleanSearch = () => {
    setFilter({ query: "", page: 1 });
  };

  if (isFetching) {
    return <Loader />;
  }

  console.log(data);

  return (
    <Layout className="flex-1 flex h-full ">
      <Content className="bg-slate-200 h-full flex flex-col items-start justify-center px-8 py-4 space-y-8 overflow-auto">
        <ArticleFilter
          handleSearchChange={handleSearchChange}
          handleCleanSearch={handleCleanSearch}
        />
        <p>
          {filter.query &&
            `Resultados de la búsqueda: "${filter.query}" - Página ${filter.page}`
          }
        </p>

        {!isFetching && (
          <>
            {!data ? (
              <div className="flex justify-center items-center w-full h-full">
                <h1 className="text-2xl text-slate-500">
                  No se encontraron resultados
                </h1>
              </div>
            ) : (
              <div className="flex flex-col  w-full space-y-4">
                <ArticlesCards
                  data={data?.results}
                  isFetching={isFetching}
                  refetch={refetch}
                />
                {/* <div className="w-full flex  justify-center items-center">
                  <Pagination
                    pageSize={10}
                    total={data?.results.length}
                    defaultCurrent={filter.page}
                    onChange={(page) => {
                      handlePageChange(page);
                    }}
                    showSizeChanger={false}
                  />
                </div> */}
              </div>
            )}
          </>
        )}
      </Content>
    </Layout>
  );
}
