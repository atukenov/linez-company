import { Spin } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { LogoProps } from "../../common/types";
import { fetchLogos, projectSelector } from "../../slices/projectSlice";

const PersonalAccount = () => {
  const { logoData, loading } = useAppSelector(projectSelector);
  const dispatch = useAppDispatch();
  const data = logoData as LogoProps[];
  useEffect(() => {
    dispatch(fetchLogos());
  }, [dispatch]);
  return (
    <Spin spinning={loading}>
      <h1 style={{ color: "red" }}>PersonalAccount</h1>
      {data &&
        data.forEach((item) => {
          <>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </>;
        })}
    </Spin>
  );
};

export default PersonalAccount;
