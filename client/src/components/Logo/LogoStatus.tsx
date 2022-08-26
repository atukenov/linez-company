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
                      <Link to={item._id} state={item}>
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
                <TimelineForm
                  handleClick={handleClick}
                  handleCancel={handleCancel}
                />
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
