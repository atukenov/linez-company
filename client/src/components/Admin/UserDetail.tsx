import { Button, Spin, Table } from "antd";
import Column from "antd/lib/table/Column";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchLogos, projectSelector } from "../../slices/projectSlice";
import LogoList from "./LogoList";

const UserDetail = () => {
  return (
    <>
      <LogoList />
    </>
  );
};

export default UserDetail;
