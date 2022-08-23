import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Select, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { RangePickerProps } from "antd/lib/date-picker";
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { DetailsProps } from "../../common/types";
import { useForm } from "../../common/utils/useForm";
import { updateDetails, uploadImage } from "../../slices/projectSlice";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const DetailsUpdate: React.FC = () => {
  const [form] = Form.useForm();
  const { timelineId } = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [details, setDetails] = useState(location.state as DetailsProps);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setDetails(location.state as DetailsProps);
    const newFileList: UploadFile[] = [];
    details.timeline.photos.map((item, i) => {
      newFileList.push({
        uid: i.toString(),
        name: item.title,
        status: "done",
        url: item.url,
      });
    });
    setFileList(newFileList);
  }, [location.state, timelineId, details.timeline.photos]);

  useEffect(() => {
    form.setFieldsValue({
      ...details,
      ...details.timeline,
      finished: details.timeline.finished && moment(details.timeline.finished),
    });
  }, [form, details]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
    console.log(file);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <br />
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file, i) => {
      formData.append("files", file as RcFile);
    });
    console.log(formData.getAll("files"));

    setUploading(true);
    dispatch(uploadImage(formData));
  };

  const onFinish = async (values: any) => {
    console.log("VALUES: ", values);
    dispatch(updateDetails(values));
    setDetails(values);
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current: any) => {
    const today = moment().endOf("day").subtract(1, "day");
    return current && current < today;
  };

  return (
    <>
      <Upload
        beforeUpload={(file) => {
          setFileList([...fileList, file]);
          return false;
        }}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 4 ? null : uploadButton}
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Uploading" : "Start Upload"}
      </Button>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
      <Form
        form={form}
        name="updateDetails"
        {...formItemLayout}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
        scrollToFirstError
        initialValues={{
          ...details.timeline,
          _id: details._id,
          projectId: details.projectId,
          finished:
            details.timeline.finished && moment(details.timeline.finished),
        }}
      >
        <Form.Item hidden name="_id">
          <Input />
        </Form.Item>
        <Form.Item hidden name="projectId">
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
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default DetailsUpdate;
