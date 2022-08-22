import { ClockCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space, Spin, Timeline } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { LogoProps } from "../../common/types";
import { alertSelector } from "../../slices/alertSlice";
import { authSelector } from "../../slices/authSlice";
import {
  addTimeline,
  fetchTimeline,
  projectSelector,
} from "../../slices/projectSlice";

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

const LogoStatus = () => {
  const { logoId } = useParams();
  const { projectDetails, loading } = useAppSelector(projectSelector);
  const status = useAppSelector(alertSelector).alertType;
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

  return (
    <>
      <Spin spinning={loading}>
        <div style={{ paddingTop: 25, paddingLeft: 25 }}>
          <h4 style={{ fontSize: "1.4rem" }}>Logo Status</h4>

          <Row>
            <Col md={24} sm={24} xs={24} xl={12}>
              <Spin spinning={loading}>
                <Timeline mode="alternate" pending={false}>
                  {projectDetails.map((item, index) => {
                    return (
                      <Timeline.Item key={index} color="green">
                        <Link to={item._id} state={item}>
                          {item.timeline.title}
                        </Link>
                      </Timeline.Item>
                    );
                  })}
                  {isAdmin && isHidden && (
                    <Timeline.Item
                      dot={
                        <Button
                          type="text"
                          style={{ color: "#7DF9FF" }}
                          onClick={handleClick}
                        >
                          <PlusCircleOutlined />
                        </Button>
                      }
                    />
                  )}
                </Timeline>
              </Spin>
              <div hidden={isHidden}>
                <Form
                  name="addTimelineForm"
                  {...formItemLayout}
                  wrapperCol={{ span: 12 }}
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
