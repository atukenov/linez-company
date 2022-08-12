import { Spin } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { LogoProps } from "../../common/types";
import { fetchLogos, projectSelector } from "../../slices/projectSlice";

const columns: ColumnsType<any> = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

const LogoList = () => {
  const { logoData, loading } = useAppSelector(projectSelector);
  const dispatch = useAppDispatch();
  const data = logoData as any;

  useEffect(() => {
    dispatch(fetchLogos());
  }, [dispatch]);

  return (
    <Spin spinning={loading} tip="Data is loading">
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record) => record._id}
        pagination={{ position: ["bottomCenter"] }}
      />
    </Spin>
  );
};

export default LogoList;
