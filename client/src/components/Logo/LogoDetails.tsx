import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { LogoProps } from "../../common/types";

const LogoDetails = () => {
  const params = useParams();
  const [data, setData] = useState(params.id);

  useEffect(() => {
    setData(params.id);
  }, [params.id]);

  return (
    <>
      <Row>{data}</Row>
      <Row>Photos</Row>
      <Row>Comments</Row>
    </>
  );
};

export default LogoDetails;
