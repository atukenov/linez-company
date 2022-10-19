import { Col, Row, Spin } from "antd";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Input from "../../../common/Input2";
import { alertSelector } from "../../../slices/alertSlice";
import { addLogo, projectSelector } from "../../../slices/projectSlice";

interface AddLogoFormProps {
  submit: () => void;
}

const AddLogoForm: FC<AddLogoFormProps> = ({ submit }) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(projectSelector).loading;
  const status = useAppSelector(alertSelector).alertType;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    if (status === "success") submit();
  }, [status, submit]);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    values = { ...values, userId: id };
    dispatch(addLogo(values));
  };

  return (
    <Spin spinning={loading}>
      <form onSubmit={formik.handleSubmit}>
        <Row gutter={48}>
          <Col xs={24} md={12} lg={10} xxl={8}>
            <Input
              name="firstName"
              placeholder="First Name"
              type="text"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              validate={{
                touched: formik.touched.firstName,
                errors: formik.errors.firstName,
              }}
            />
          </Col>
          <Col xs={24} md={12} lg={10} xxl={8}>
            <Input
              name="lastName"
              placeholder="Last Name"
              type="text"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              validate={{
                touched: formik.touched.lastName,
                errors: formik.errors.lastName,
              }}
            />
          </Col>
        </Row>

        <button type="submit">Submit</button>
      </form>
    </Spin>
  );
};

export default AddLogoForm;
