import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import SemxTextInput from "../utilities/customFormControls/SemxTextInput";
import CityService from "../services/cityService";
import { toast } from "react-toastify";


export default function CityAdd() {
  const initialValues = { name: "" };

  const schema = Yup.object({
    name: Yup.string().required("Şehir ismi zorunludur")
  });

  const handleAddToCity = (city) => {
    let cityService = new CityService();
    cityService.add(city);
    toast.success(`${city} sisteme eklendi`)
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        handleAddToCity(values.name)
      }}
    >
      <Form className="ui form">
        <SemxTextInput name="name" placeholder="Şehir adı" />
        <Button color="green" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}
