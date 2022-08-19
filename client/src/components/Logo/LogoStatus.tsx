import { ClockCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row, Timeline } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { LogoProps } from "../../common/types";
import { fetchTimeline, projectSelector } from "../../slices/projectSlice";

const LogoStatus = () => {
  const { logoId } = useParams();
  const projectDetails = useAppSelector(projectSelector).projectDetails;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (logoId) dispatch(fetchTimeline(logoId));
  }, [logoId, dispatch]);

  useEffect(() => {}, [projectDetails]);

  return (
    <>
      <div style={{ paddingTop: 25, paddingLeft: 25 }}>
        <h4 style={{ fontSize: "1.4rem" }}>Logo Status</h4>

        <Row>
          <Col md={24} sm={24} xs={24} xl={12}>
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
            </Timeline>
          </Col>
          <Col md={24} sm={24} xs={24} xl={12}>
            <Outlet />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LogoStatus;
