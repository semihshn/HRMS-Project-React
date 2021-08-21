import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import SemxTextInput from "../../utilities/customFormControls/SemxTextInput";
import SemxSelectInput from "../../utilities/customFormControls/SemxSelectInput";
import JobService from "../../services/jobService";
import EmployerService from "../../services/employerService";
import CityService from "../../services/cityService";
import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdvertAdd() {
  const [cities, setCities] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAllCities().then((result) => setCities(result.data.data));

    let employerService = new EmployerService();
    employerService
      .getAllEmployers()
      .then((result) => setEmployers(result.data.data));

    let jobService = new JobService();
    jobService.getAllJobs().then((result) => setJobs(result.data.data));
  }, []);

  const initialValues = {
    applicationDeadline: "2021-07-24",
    cityId: 0,
    description: "",
    employerId: 0,
    jobId: 0,
    maxSalary: 0,
    minSalary: 0,
    numberOfOpenPosition: 0,
    workingType: "",
    workingTimeType: "",
  };

  const schema = Yup.object({
    applicationDeadline: Yup.date().required(
      "Son başvuru tarihi bilgisi zorunludur"
    ),
    cityId: Yup.number().required("Lütfen şehir seçiniz"),
    description: Yup.string().required("Lütfen ilanınız için açıklama giriniz"),
    employerId: Yup.number().required("Lütfen iş veren seçiniz"),
    jobId: Yup.number().required("Lütfen aradığınız mesleği giriniz"),
    maxSalary: Yup.number().required("Lütfen maksimum maaş bilgisi giriniz"),
    minSalary: Yup.number().required("Lütfen minimum maaş bilgisi giriniz"),
    numberOfOpenPosition: Yup.number().required(
      "Lütfen seçtiğiniz pozisyon için kaç kişi aradığınızı giriniz"
    ),
    workingType: Yup.string().required(
      "Lütfen ilanınız için çalışma türü giriniz(Örneğin : Remote , Yarı Remote veya Ofis çalışanı)"
    ),
    workingTimeType: Yup.string().required(
      "Lütfen ilanınız için çalışma zamanı bilgisi giriniz(Örneğin : Yarı Zamanlı, tam zamanlı...)"
    ),
  });

  const handleAddToJobAdvert = (
    applicationDeadline,
    cityId,
    description,
    employerId,
    jobId,
    maxSalary,
    minSalary,
    numberOfOpenPosition,
    workingType,
    workingTimeType
  ) => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.add(
      applicationDeadline,
      cityId,
      description,
      employerId,
      jobId,
      maxSalary,
      minSalary,
      numberOfOpenPosition,
      workingType,
      workingTimeType
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        handleAddToJobAdvert(
          new Date(values.applicationDeadline).toISOString(),
          values.cityId,
          values.description,
          values.employerId,
          values.jobId,
          values.maxSalary,
          values.minSalary,
          values.numberOfOpenPosition,
          values.workingType,
          values.workingTimeType
        );
      }}
    >
      <Form className="ui form segment">
        <SemxTextInput name="applicationDeadline" type="date" />

        <SemxSelectInput
          name="cityId"
          items={cities}
          itemKey="name"
        ></SemxSelectInput>

        <SemxTextInput name="description" placeholder="description" />

        <SemxSelectInput
          name="employerId"
          items={employers}
          itemKey="companyName"
        ></SemxSelectInput>

        <SemxSelectInput
          name="jobId"
          items={jobs}
          itemKey="jobName"
        ></SemxSelectInput>

        <SemxTextInput name="maxSalary" type="number" itemlabel="Max Salary" />
        <SemxTextInput name="minSalary" type="number" itemlabel="Min Salary" />
        <SemxTextInput
          name="numberOfOpenPosition"
          type="number"
          itemlabel="Number Of Position"
        />
        <SemxTextInput name="workingType" type="text" itemlabel="Çalışma Türü (Remote/Office)" />
        <SemxTextInput name="workingTimeType" type="text" itemlabel="Çalışma Süresi(Yarı/Tam Zamanlı)" />

        <Button color="green" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}
