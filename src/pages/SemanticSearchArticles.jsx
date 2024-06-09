import React, { useState } from "react";
import { Layout, Table, Pagination } from "antd";
import { ColumnsTableUsers } from "@constants/ColumnsTableUsers";
import Loader from "@components/General/Loader";
import MobileViewUsers from "@components/Dashboard/MobileViewUsers";
import { useGetUsers } from "@hooks/Users/useGetUsers";
import ArticleFilter from "@components/Dashboard/ArticleFilter";

export default function  SemanticSearchArticles() {
  const { Content } = Layout;

  const [filter, setFilter] = useState({ search: "", page: 1, roleId: "" });

  const { data, isFetching, refetch} = useGetUsers(filter);

  const handlePageChange = (newPage) => {
    if (newPage != filter.page) {
      setFilter({ ...filter, page: newPage });
    }
  };

  const handleRefetch = () => {
    refetch()
  }

  const handleSearchChange = (data) => {
    const updatedFilter = { ...filter };

    updatedFilter.roleId = data.rol || "";
    updatedFilter.search = data.user || "";
    updatedFilter.page = 1;

    setFilter(updatedFilter);
  };

  const handleCleanSearch = () => {
    setFilter({ search: "", page: 1, roleId: "" });
  }

  if (isFetching) {
    return <Loader />;
  }


  return (
    <Layout className="flex-1 flex h-full">
      <Content className="bg-slate-200 h-full flex flex-col items-start justify-center px-8 py-4 space-y-8 overflow-auto">
        <ArticleFilter handleSearchChange={handleSearchChange} handleCleanSearch={handleCleanSearch} />

        {!isFetching && (
          <>
            <Table
              pagination={false}
              className="w-full hidden lg:table"
              columns={ColumnsTableUsers(handleRefetch)}
              dataSource={data?.hits.hits}
              rowKey={(record) => record?._id}
              style= {{minWidth: '100%', width: '100%'}}
            />
            <MobileViewUsers data={data?.hits.hits} isFetching={isFetching} refetch={refetch} />
            <div className="flex  w-full justify-center items-center">
              <Pagination
                pageSize={10}
                total={data?.totalUsers}
                defaultCurrent={filter.page}
                onChange={(page) => {
                  handlePageChange(page);
                }}
                showSizeChanger={false}
              />
            </div>
          </>
        )}
      </Content>
    </Layout>
  );
}
