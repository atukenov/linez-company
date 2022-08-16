import { Avatar, Button, Spin, Tag } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import Column from "antd/lib/table/Column";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers, adminSelector, deleteUser } from "../../slices/adminSlice";

const UserList = () => {
  const { userData, loading } = useAppSelector(adminSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {}, [userData]);

  const handleClick = () => {
    navigate("../admin/register");
  };

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  const handleRowClick = (id: string) => {
    console.log(id);
    navigate(`${id}`);
  };

  return (
    <Spin spinning={loading} tip="Data is loading">
      <Button type="primary" onClick={handleClick}>
        Add New User
      </Button>
      <Table
        dataSource={userData as any}
        rowKey={(record) => record._id}
        pagination={{ position: ["bottomCenter"] }}
        onRow={(record: any, rowIndex) => {
          return {
            onClick: (event) => {
              handleRowClick(record._id);
            },
          };
        }}
      >
        <Column
          title="Name"
          dataIndex="name"
          render={(value, record: any) => (
            <>
              <Avatar style={{ marginRight: "10px" }} src={record.avatar} />
              {value}
            </>
          )}
        />
        <Column title="Email" dataIndex="email" />
        <Column
          title="Roles"
          dataIndex="roles"
          render={(value, record: any) => (
            <>
              {record.roles.map((role: any, key: any) => {
                let color =
                  role === "admin"
                    ? "red"
                    : role === "user"
                    ? "yellow"
                    : "blue";
                return (
                  <Tag color={color} key={key}>
                    {role.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}
        />
        <Column
          dataIndex="_id"
          render={(_) => (
            <Button type="primary" danger onClick={() => handleDelete(_)}>
              Delete
            </Button>
          )}
        />
      </Table>
    </Spin>
  );
};

export default UserList;
