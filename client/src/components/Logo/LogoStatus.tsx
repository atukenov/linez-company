import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Col, Row, Spin, Steps } from "antd";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchTimeline,
  projectSelector,
  fetchSteps,
} from "../../slices/projectSlice";
import Chat from "../Chat/Chat";

const LogoStatus = () => {
  const { logoId } = useParams();
  const { projectDetails, loading, currentStep, steps } =
    useAppSelector(projectSelector);

  const dispatch = useAppDispatch();
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
