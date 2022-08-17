import { Button, Modal, Spin, Table } from "antd";
import Column from "antd/lib/table/Column";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchLogos, projectSelector } from "../../slices/projectSlice";
import AddLogo from "./AddLogo";

const LogoList: FC = () => {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const { logoData, loading } = useAppSelector(projectSelector);
  const data = logoData as any;
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchLogos(id as string));
  }, [dispatch, id]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Spin spinning={loading} tip="Data is loading">
      <Button type="primary" onClick={showModal}>
        Add New Logo
      </Button>
      <Table
        dataSource={data}
        rowKey={(record: any) => record._id}
        pagination={{ position: ["bottomCenter"] }}
      >
        <Column title="Title" dataIndex="title" />
        <Column title="Description" dataIndex="description" />
      </Table>
      <Modal
        title="Add new Logo"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AddLogo handleOk={handleOk} />
      </Modal>
    </Spin>
  );
};

export default LogoList;
