import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Spin, Timeline } from "antd";

import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector } from "../../slices/authSlice";
import { fetchTimeline, projectSelector } from "../../slices/projectSlice";
import TimelineForm from "../Admin/Timeline/TimelineForm";

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

  const getColor = (status: string) => {
    if (status === "0") return "grey";
    if (status === "1") return "#8d8400";
    if (status === "2") return "red";
    if (status === "3") return "green";
  };

  const getIcon = (status: string) => {
    if (status === "0") return null;
    if (status === "1") return <ClockCircleOutlined />;
    if (status === "2") return <InfoCircleOutlined />;
    if (status === "3") return <CheckCircleOutlined />;
  };

  return (
    <>
      <Spin spinning={loading}>
        <div style={{ paddingTop: 25, paddingLeft: 25 }}>
          <h4 style={{ fontSize: "1.4rem" }}>Logo Status</h4>

          <Row justify="center" align="middle">
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
                <Timeline.Item
                  key="1"
                  label="date"
                  color={getColor("1")}
                  dot={getIcon("1")}
                >
                  <Link to="1" state={null}>
                    Step 1
                  </Link>
                </Timeline.Item>
                <Timeline.Item
                  key="2"
                  label="date"
                  color={getColor("2")}
                  dot={getIcon("2")}
                >
                  <Link to="2" state={null}>
                    Step 2
                  </Link>
                </Timeline.Item>
                <Timeline.Item
                  key="3"
                  label="date"
                  color={getColor("3")}
                  dot={getIcon("3")}
                >
                  <Link to="3" state={null}>
                    Step 3
                  </Link>
                </Timeline.Item>
              </Timeline>
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
