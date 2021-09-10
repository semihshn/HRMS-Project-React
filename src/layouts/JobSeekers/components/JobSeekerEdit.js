import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Image, Segment } from "semantic-ui-react";
import { Form, Formik } from "formik";
import SemxTextInput from "../../../utilities/customFormControls/SemxTextInput";
import SemxSelectInput from "../../../utilities/customFormControls/SemxSelectInput";
import JobService from "../../../services/jobService";
import JobSeekerService from "../../../services/jobSeekerService";
import * as Yup from "yup";

export default function JobSeekerEdit({ jobSeeker }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobService = new JobService();

    jobService.getAllJobs().then((result) => setJobs(result.data.data));
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    nationalityId: "",
    yearOfBirth: "",
    jobId:0
  };

  const schema = Yup.object({
    firstName: Yup.string().required(
      "İsim bilgisi zorunludur"
    ),
    lastName: Yup.string().required("Lütfen soyisminizi giriniz"),
    email: Yup.string().required("Lütfen email giriniz"),
    password: Yup.string().required("Lütfen şifre giriniz"),
    nationalityId: Yup.string().required("Lütfen Tc kimlik numaranızı giriniz"),
    yearOfBirth: Yup.string().required("Lütfen doğum yılınızı giriniz"),
    jobId: Yup.number().required("Lütfen meslek giriniz"),
  });

  const handleUpdateToJobSeeker = (
    firstName,
    lastName,
    email,
    password,
    nationalityId,
    yearOfBirth,
    jobId
  ) => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.update(
      firstName,
      lastName,
      nationalityId,
      email,
      password,
      yearOfBirth,
      jobId
    );
  }
  //console.log(jobSeeker.user)
  return (
    <Container>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Image
            className="ui medium rounded image centered"
            src="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          />
        </Grid.Column>
      </Grid.Row>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          // handleUpdateToJobSeeker(
          //   new Date(values.applicationDeadline).toISOString(),
          //   values.cityId,
          //   values.description,
          //   values.employerId,
          //   values.jobId,
          //   values.maxSalary,
          //   values.minSalary,
          //   values.numberOfOpenPosition,
          //   values.workingType,
          //   values.workingTimeType
          // );
          console.log(values);
        }}
      >
        <Form className="ui form">
          <Segment stacked>
            <Container>
              <Grid>
                <Grid.Row>
                  <Grid.Column width="8">
                    <SemxTextInput value={jobSeeker.firstName} name="firstName" placeholder="İsim" />
                  </Grid.Column>
                  <Grid.Column width="8">
                    <SemxTextInput value={jobSeeker.lastName} name="lastName" placeholder="Soyisim" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width="8">
                    <SemxTextInput value={jobSeeker.user?.email} name="email" placeholder="E-mail" />
                  </Grid.Column>
                  <Grid.Column width="8">
                    <SemxTextInput value={jobSeeker.user?.password} name="password" placeholder="Şifre" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width="5">
                    <SemxTextInput value={jobSeeker.nationalityId} name="nationalityId" placeholder="Tc" />
                  </Grid.Column>
                  <Grid.Column width="5">
                    <SemxTextInput
                    value={jobSeeker.yearOfBirth}
                      name="yearOfBirth"
                      placeholder="Doğum Yılı"
                    />
                  </Grid.Column>
                  <Grid.Column width="6">
                    <SemxSelectInput
                      name="jobId"
                      items={jobs}
                      itemKey="jobName"
                      selectedName={"jobSeeker.job.jobName"}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column className="centered" width="8">
                    <Button type="submit" color="green" fluid size="large">
                      Update
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Form>
      </Formik>
    </Grid>
  </Container>
  );
}
