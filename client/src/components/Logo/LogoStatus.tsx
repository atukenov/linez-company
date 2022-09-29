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
import Chat from "../Chat/Chat";

const LogoStatus = () => {
  const { logoId } = useParams();
  const { projectDetails, loading, currentStep } =
    useAppSelector(projectSelector);
  const { isAdmin } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const [isHidden, setIsHidden] = useState(true);
  const [step, setStep] = useState(currentStep);

  useEffect(() => {
    if (logoId) dispatch(fetchTimeline(logoId));
  }, [logoId, dispatch]);

  useEffect(() => {}, [projectDetails]);
  useEffect(() => {
    setStep(currentStep);
  }, [currentStep]);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  const handleCancel = () => {
    setIsHidden(!isHidden);
  };

  const getColor = (status: number) => {
    if (status === 0) return "grey";
    if (status === 1) return "#8d8400";
    if (status === 2) return "green";
  };

  const getIcon = (status: number) => {
    if (status === 0) return null;
    if (status === 1) return <ClockCircleOutlined />;
    if (status === 2) return <CheckCircleOutlined />;
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
                {projectDetails.map((value, i) => {
                  return (
                    <Timeline.Item
                      key={i}
                      label={value.date ? value.date : "N/A"}
                      color={getColor(value.status)}
                      dot={getIcon(value.status)}
                    >
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => setStep(i)}
                      >
                        Step {i + 1}
                      </div>
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </Col>
            <Col md={24} sm={24} xs={24} xl={12}>
              {!loading && <Chat state={{ logo: logoId, step: step }} />}
            </Col>
          </Row>
        </div>
      </Spin>
    </>
  );
};

export default LogoStatus;
