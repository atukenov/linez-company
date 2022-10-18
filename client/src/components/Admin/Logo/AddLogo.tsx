import { Button, Form, Input, Select, Spin } from "antd";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { alertSelector } from "../../../slices/alertSlice";
import { addLogo, projectSelector } from "../../../slices/projectSlice";

interface AddLogoProps {
  handleOk: () => void;
}

const AddLogo: FC<AddLogoProps> = ({ handleOk }) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(projectSelector).loading;
  const status = useAppSelector(alertSelector).alertType;

  useEffect(() => {
    if (status === "success") handleOk();
  }, [status, handleOk]);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    values = { ...values, userId: id };
    dispatch(addLogo(values));
  };

  return (
    <Spin spinning={loading}>
      <Form
        name="complex-form"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Description is required" }]}
        >
          <Input placeholder="Please input description" />
        </Form.Item>
        <Form.Item label="Address">
          <Input.Group compact>
            <Form.Item
              name={["address", "province"]}
              noStyle
              rules={[{ required: true, message: "Province is required" }]}
            >
              <Select placeholder="Select province">
                <Select.Option value="Zhejiang">Atyrau</Select.Option>
                <Select.Option value="Jiangsu">Almaty</Select.Option>
                <Select.Option value="Jiangsu">Nur-Sultan</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["address", "street"]}
              noStyle
              rules={[{ required: true, message: "Street is required" }]}
            >
              <Input style={{ width: "50%" }} placeholder="Input street" />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item
          label="Apartment Name"
          name="apartmentName"
          rules={[{ required: true, message: "Apartment is required" }]}
        >
          <Select placeholder="Select province">
            <Select.Option value="Abyroy"> Abyroy</Select.Option>
            <Select.Option value="Talan">Talan</Select.Option>
            <Select.Option value="Zaman">Zaman</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default AddLogo;
