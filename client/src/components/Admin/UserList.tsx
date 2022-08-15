import { Button, Spin, Tag } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers, adminSelector } from "../../slices/adminSlice";

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Roles",
    dataIndex: "roles",
    render: (value, record, index) => (
      <>
        {record.roles.map((role: any, key: any) => {
          let color =
            role === "admin" ? "red" : role === "user" ? "yellow" : "blue";
          return (
            <Tag color={color} key={key}>
              {role.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const UserList = () => {
  const { userData, loading } = useAppSelector(adminSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleClick = () => {
    navigate("../admin/register");
  };

  return (
    <Spin spinning={loading} tip="Data is loading">
      <Button type="primary" onClick={handleClick}>
        Add New User
      </Button>
      <Table
        columns={columns}
        dataSource={userData as any}
        rowKey={(record) => record._id}
        pagination={{ position: ["bottomCenter"] }}
      />
    </Spin>
  );
};

export default UserList;
