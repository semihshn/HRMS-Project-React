import React, { useEffect, useState } from "react";

import JobSeekerService from "../../services/jobSeekerService";
import JobSeekerEdit from "./components/JobSeekerEdit";

export default function JobSeekerInfo() {
  const [jobSeeker, setJobSeeker] = useState({});

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();

    jobSeekerService
      .getByUserId(localStorage.getItem("userId"))
      .then((result) => {
        setJobSeeker(result.data.data)
      });
  }, [jobSeeker]);


  return (
  <JobSeekerEdit jobSeeker={jobSeeker}/>
  );
}
