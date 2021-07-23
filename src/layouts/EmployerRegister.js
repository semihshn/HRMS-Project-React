import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import SemxTextInput from "../utilities/customFormControls/SemxTextInput";
import EmployerService from "../services/employerService";

export default function EmployerRegister() {
  const initialValues = {
    companyName: "",
    telephone: "",
    email: "",
    password: "",
    webSite: "",
  };

  const schema = Yup.object({
    companyName: Yup.string().required("Şirket ismi zorunludur"),
    telephone: Yup.string().required("Lütfen telefon bilginizi giriniz"),
    email: Yup.string().required("Lütfen email bilginizi giriniz"),
    password: Yup.string().required("Lütfen şifrenizi giriniz"),
    webSite: Yup.string().required("Lütfen website bilginizi giriniz"),
  });

  const handleAddToCity = (
    companyName,
    telephone,
    email,
    password,
    webSite
  ) => {
    let employerService = new EmployerService();
    employerService
      .add(companyName, telephone, email, password, webSite)
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        handleAddToCity(
          values.companyName,
          values.telephone,
          values.email,
          values.password,
          values.webSite
        );
      }}
    >
      <Form className="ui form">
        <SemxTextInput name="companyName" placeholder="Şirket adı" />
        <SemxTextInput name="telephone" placeholder="507-222-12-03" />
        <SemxTextInput name="email" placeholder="hrms@hrms.com" />
        <SemxTextInput name="password" placeholder="*****" />
        <SemxTextInput name="webSite" placeholder="www.hrms.com" />
        <Button color="green" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}
