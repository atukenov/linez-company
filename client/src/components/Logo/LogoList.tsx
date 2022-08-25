import { Button, Modal, Spin, Table } from "antd";
import Column from "antd/lib/table/Column";
import moment from "moment";
import React, { FC, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector } from "../../slices/authSlice";
import { fetchLogos, projectSelector } from "../../slices/projectSlice";

const LogoList: FC = () => {
  const auth = useAppSelector(authSelector);
  const id = auth.user?._id;
  const dispatch = useAppDispatch();
  const { logoData, loading } = useAppSelector(projectSelector);
  const data = logoData as any;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchLogos(id as string));
  }, [dispatch, id]);

  const handleClick = (data: any) => {
    navigate(data._id, { state: data });
  };

  return (
    <Spin spinning={loading} tip="Data is loading">
      <Table
        dataSource={data}
        rowKey={(record: any) => record._id}
        pagination={{ position: ["bottomCenter"] }}
      >
        <Column title="#" render={(t, r, i) => <>{i + 1}</>} width={10} />
        <Column title="Title" dataIndex="title" />
        <Column
          title="Description"
          dataIndex="description"
          responsive={["md"]}
        />
        <Column
          title="Created"
          dataIndex="createdAt"
          width={200}
          align="right"
          render={(text, record) => <>{moment(text).format("DD MMMM, YYYY")}</>}
          responsive={["md"]}
        />
        <Column
          title="Last Updated"
          dataIndex="modifiedAt"
          width={200}
          align="right"
          render={(text, record) => <>{moment(text).format("DD MMMM, YYYY")}</>}
          responsive={["md"]}
        />
        <Column
          align="center"
          width={150}
          render={(t, r: any) => (
            <Button type="primary" onClick={() => handleClick(r)}>
              Status
            </Button>
          )}
        />
      </Table>
    </Spin>
  );
};

export default LogoList;
