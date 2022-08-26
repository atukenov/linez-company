import { Button, DatePicker, Form, Input, Select, Space } from "antd";
import React, { FC } from "react";
import { RangePickerProps } from "antd/lib/date-picker";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { addTimeline } from "../../../slices/projectSlice";
import moment from "moment";

type TimelineFormProps = {
  handleClick(): void;
  handleCancel(): void;
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 12 },
    sm: { span: 14 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 12,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 6,
    },
  },
};

const TimelineForm: FC<TimelineFormProps> = ({ handleClick, handleCancel }) => {
  const { logoId } = useParams();
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    dispatch(addTimeline(values));
    handleClick();
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current: any) => {
    const today = moment().endOf("day").subtract(1, "day");
    return current && current < today;
  };

  return (
    <Form
      name="addTimelineForm"
      {...formItemLayout}
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item hidden name="projectId" initialValue={logoId}>
        <Input />
      </Form.Item>
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Title is required!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input />
      </Form.Item>
      <Form.Item name="finished" label="Finished Date">
        <DatePicker format="DD-MM-YYYY" disabledDate={disabledDate} />
      </Form.Item>
      <Form.Item name="status" label="Status" wrapperCol={{ span: 6 }}>
        <Select>
          <Select.Option value="2">Closed</Select.Option>
          <Select.Option value="1">In Process</Select.Option>
          <Select.Option value="3">Done</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Add Timeline
          </Button>
          <Button type="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default TimelineForm;
