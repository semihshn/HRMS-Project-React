import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, FormField, Select } from "semantic-ui-react";
import SemxTextInput from "../utilities/customFormControls/SemxTextInput";
import JobService from "../services/jobService";
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerRegister() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobService = new JobService();
    jobService.getAllJobs().then((result) => setJobs(result.data.data));
  });

  const countryOptions = [{ value: "", text: "" }];
  jobs.map((job) => countryOptions.push({ value: job.id, text: job.jobName }));

  const initialValues = {
    firstName: "",
    lastName: "",
    nationalityId: "",
    email: "",
    password: "",
    yearOfBirth: "",
    jobId: 0,
  };

  const schema = Yup.object({
    firstName: Yup.string().required("İsim alanı zorunludur"),
    lastName: Yup.string().required("Soyisim alanı zorunludur"),
    nationalityId: Yup.string().required("Lütfen TC kimlik numaranızı giriniz"),
    email: Yup.string().required("Lütfen email bilginizi giriniz"),
    password: Yup.string().required("Lütfen şifrenizi giriniz"),
    yearOfBirth: Yup.string().required("Lütfen doğum tarihinizi giriniz"),
    jobId: Yup.number().required("Lütfen aradığınız mesleği giriniz"),
  });

  const handleAddToJobSeeker = (
    firstName,
    lastName,
    nationalityId,
    email,
    password,
    yearOfBirth,
    jobId
  ) => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.add(
      firstName,
      lastName,
      nationalityId,
      email,
      password,
      yearOfBirth,
      jobId
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
          console.log(values.email)
        // handleAddToJobSeeker(
        //   values.firstName,
        //   values.lastName,
        //   values.nationalityId,
        //   values.email,
        //   values.yearOfBirth,
        //   values.jobId
        // );
      }}
    >
      <Form className="ui form">
        <SemxTextInput name="firstName" placeholder="İsim" />
        <SemxTextInput name="lastName" placeholder="Soyisim" />
        <SemxTextInput name="nationalityId" placeholder="TC" />
        <SemxTextInput name="email" placeholder="e-mail" />
        <SemxTextInput name="yearOfBirth" placeholder="doğum yılı" />
        <FormField>
          <Select
            
            placeholder="Select your job"
            options={countryOptions}
          />
        </FormField>

        <Button color="green" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}
