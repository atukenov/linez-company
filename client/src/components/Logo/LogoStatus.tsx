import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
  Spin,
  Timeline,
} from "antd";
import { RangePickerProps } from "antd/lib/date-picker";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector } from "../../slices/authSlice";
import {
  addTimeline,
  fetchTimeline,
  projectSelector,
} from "../../slices/projectSlice";

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

const LogoStatus = () => {
  const { logoId } = useParams();
  const { projectDetails, loading } = useAppSelector(projectSelector);
  const { isAdmin } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    if (logoId) dispatch(fetchTimeline(logoId));
  }, [logoId, dispatch]);

  useEffect(() => {}, [projectDetails]);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  const handleCancel = () => {
    setIsHidden(!isHidden);
  };

  const onFinish = (values: any) => {
    dispatch(addTimeline(values));
    handleClick();
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current: any) => {
    const today = moment().endOf("day").subtract(1, "day");
    return current && current < today;
  };

  const getColor = (status: string) => {
    if (status === "1") return "#8d8400";
    if (status === "2") return "red";
    if (status === "3") return "green";
  };

  const getIcon = (status: string) => {
    if (status === "1") return <ClockCircleOutlined />;
    if (status === "2") return <InfoCircleOutlined />;
    if (status === "3") return <CheckCircleOutlined />;
  };

  return (
    <>
      <Spin spinning={loading}>
        <div style={{ paddingTop: 25, paddingLeft: 25 }}>
          <h4 style={{ fontSize: "1.4rem" }}>Logo Status</h4>

          <Row>
            <Col md={24} sm={24} xs={22} xl={12}>
              {projectDetails.length > 0 ? (
                <span>Click on any process to view more</span>
              ) : (
                !isAdmin && <span>Nothing yet created</span>
              )}

              <Timeline
                mode="left"
                pending={false}
                style={{ marginTop: "25px" }}
              >
                {projectDetails.map((item, index) => {
                  return (
                    <Timeline.Item
                      key={index}
                      label={
                        item.timeline.finished
                          ? moment(item.timeline.finished).format("DD MMM, YY")
                          : "N/A"
                      }
                      color={getColor(item.timeline.status)}
                      dot={getIcon(item.timeline.status)}
                    >
                      <Link to={`${item._id}/#TimelineDetails`} state={item}>
                        {item.timeline.title}
                      </Link>
                    </Timeline.Item>
                  );
                })}
                {isAdmin && isHidden && (
                  <Timeline.Item
                    label=" "
                    dot={
                      <Button
                        type="text"
                        style={{
                          color: "#1900ff",
                        }}
                        onClick={handleClick}
                      >
                        <PlusCircleOutlined />
                      </Button>
                    }
                  />
                )}
              </Timeline>
              <div hidden={isHidden}>
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
                    <DatePicker
                      format="DD-MM-YYYY"
                      disabledDate={disabledDate}
                    />
                  </Form.Item>
                  <Form.Item
                    name="status"
                    label="Status"
                    wrapperCol={{ span: 6 }}
                  >
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
              </div>
            </Col>
            <Col md={24} sm={24} xs={24} xl={12}>
              {!loading && <Outlet />}
            </Col>
          </Row>
        </div>
      </Spin>
    </>
  );
};

export default LogoStatus;
