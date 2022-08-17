import { Button, Modal, Spin, Table } from "antd";
import Column from "antd/lib/table/Column";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector } from "../../slices/authSlice";
import { fetchLogos, projectSelector } from "../../slices/projectSlice";

const LogoList: FC = () => {
  const auth = useAppSelector(authSelector);
  const id = auth.user?._id;
  const dispatch = useAppDispatch();
  const { logoData, loading } = useAppSelector(projectSelector);
  const data = logoData as any;

  useEffect(() => {
    dispatch(fetchLogos(id as string));
  }, [dispatch, id]);

  return (
    <Spin spinning={loading} tip="Data is loading">
      <Table
        dataSource={data}
        rowKey={(record: any) => record._id}
        pagination={{ position: ["bottomCenter"] }}
      >
        <Column title="Title" dataIndex="title" />
        <Column title="Description" dataIndex="description" />
      </Table>
    </Spin>
  );
};

export default LogoList;
