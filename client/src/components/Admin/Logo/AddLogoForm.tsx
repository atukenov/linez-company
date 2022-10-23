import { Col, Form, Row, Space, Spin } from "antd";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Input from "../../../common/Input2";
import { alertSelector } from "../../../slices/alertSlice";
import { addLogo, projectSelector } from "../../../slices/projectSlice";
import Select from "../../../common/Select";

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
      company: {
        name: "",
        description: "",
        area: "",
      },
      colors: "",
    },
    validationSchema: Yup.object({
      company: Yup.object({
        name: Yup.string().required("Name is required"),
        description: Yup.string().required("Description number is required"),
        area: Yup.string().required("Area is required"),
      }),
      colors: Yup.string().required("At least one color needed"),
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
      <h6 style={{ textAlign: "center", margin: "15px 0" }}>Company Details</h6>
      <Form onFinish={formik.handleSubmit}>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <Input
              name="company.name"
              placeholder="Enter a company Name"
              type="text"
              value={formik.values.company.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              validate={{
                touched: formik.touched.company?.name,
                errors: formik.errors.company?.name,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={{ span: 12, offset: 6 }}>
            <Input
              name="company.description"
              placeholder="Enter company description"
              type="text"
              value={formik.values.company.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              validate={{
                touched: formik.touched.company?.description,
                errors: formik.errors.company?.description,
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={24} lg={{ span: 5, offset: 6 }}>
            <Select
              name="company.area"
              placeholder="Area of work"
              type="text"
              value={formik.values.company.area}
              onChange={(e) =>
                formik.setFieldValue("company.area", e.target.value)
              }
              onBlur={formik.handleBlur}
              validate={{
                touched: formik.touched.company?.area,
                errors: formik.errors.company?.area,
              }}
            />
          </Col>
          <Col xs={24} lg={{ span: 5, offset: 2 }}>
            <Input
              name="colors"
              placeholder="What colors to use?"
              type="text"
              value={formik.values.colors}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              validate={{
                touched: formik.touched.colors,
                errors: formik.errors.colors,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col offset={17}>
            <button type="submit">Submit</button>
          </Col>
        </Row>
      </Form>
    </Spin>
  );
};

export default AddLogoForm;
