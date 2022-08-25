import { Button, Modal, Spin, Table } from "antd";
import Column from "antd/lib/table/Column";
import moment from "moment";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchLogos, projectSelector } from "../../../slices/projectSlice";
import AddLogo from "./AddLogo";

const LogoList: FC = () => {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  const handleRowClick = (id: any) => {
    navigate("logo/" + id, { state: data });
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
        onRow={(record: any, rowIndex) => {
          return {
            onClick: (event) => {
              handleRowClick(record._id);
            },
          };
        }}
      >
        <Column title="#" render={(t, r, i) => <>{i + 1}</>} width={10} />
        <Column title="Title" dataIndex="title" />
        <Column title="Description" dataIndex="description" />
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
