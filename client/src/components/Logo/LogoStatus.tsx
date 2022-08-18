import { ClockCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row, Timeline } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { LogoProps } from "../../common/types";

const LogoStatus = () => {
  const params = useParams();
  const [data, setData] = useState(params.logoId);
  useEffect(() => {
    setData(params.logoId);
  }, [params.logoId]);

  return (
    <>
      <div style={{ paddingTop: 25, paddingLeft: 25 }}>
        <h4 style={{ fontSize: "1.4rem" }}>Logo Status</h4>

        <Row>
          <Col md={24} sm={24} xs={24} xl={12}>
            <Timeline mode="right" pending={false}>
              <Link to="41243123" state={"1"}>
                <Timeline.Item label="2022-08-15" color="green">
                  Started
                </Timeline.Item>
              </Link>
              <Link to="432141324" state={"2"}>
                <Timeline.Item label="2022-08-16" color="green">
                  First demo
                </Timeline.Item>
              </Link>
              <Timeline.Item label="2022-08-17" color="green">
                User check
              </Timeline.Item>
              <Timeline.Item label="2022-08-17">User check</Timeline.Item>
              <Timeline.Item
                label="In Process"
                dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
              >
                Last Check
              </Timeline.Item>
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
