import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Spin, Steps, Timeline } from "antd";

import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector } from "../../slices/authSlice";
import {
  fetchTimeline,
  projectSelector,
  fetchSteps,
} from "../../slices/projectSlice";
import TimelineForm from "../Admin/Timeline/TimelineForm";
import Chat from "../Chat/Chat";

const LogoStatus = () => {
  const { logoId } = useParams();
  const { projectDetails, loading, currentStep, steps } =
    useAppSelector(projectSelector);
  const { isAdmin } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const [isHidden, setIsHidden] = useState(true);
  const [step, setStep] = useState(currentStep);

  useEffect(() => {
    dispatch(fetchSteps());
  }, [dispatch]);

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
    if (status === 0) return "wait";
    if (status === 1) return "process";
    if (status === 2) return "finish";
  };

  const getIcon = (status: number) => {
    if (status === 0) return null;
    if (status === 1) return <ClockCircleOutlined />;
    if (status === 2) return <CheckCircleOutlined />;
  };

  return (
    <>
      <Spin spinning={!loading && steps ? false : true}>
        <div style={{ paddingTop: 25, paddingLeft: 25 }}>
          <h4 style={{ fontSize: "1.4rem" }}>Logo Status</h4>
          <Steps style={{ marginTop: "25px" }} labelPlacement="vertical">
            {projectDetails.map((value, i) => {
              return (
                <Steps.Step
                  key={i}
                  title={steps[i]?.title}
                  description={steps[i]?.description}
                  status={i === step ? "process" : getColor(value.status)}
                  subTitle={value.date ? value.date : ""}
                  icon={getIcon(value.status)}
                  style={{ cursor: "pointer" }}
                  onClick={() => setStep(i)}
                />
              );
            })}
          </Steps>
          <Row justify="center" align="middle">
            <Col md={24} sm={24} xs={22} xl={12}></Col>
            <Col md={24} sm={24} xs={24} xl={12}>
              <div style={{ padding: "0 10rem" }}>
                {!loading && <Chat state={{ logo: logoId, step: step }} />}
              </div>
            </Col>
          </Row>
        </div>
      </Spin>
    </>
  );
};

export default LogoStatus;
