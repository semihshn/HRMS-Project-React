import React from "react";
import { Route } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import CitiesList from "./Cities/CitiesList";
import JobSeekersList from "./JobSeekers/JobSeekersList";
import JobsList from "./Jobs/JobsList";
import Navi from "./Navi/Navi";
import JobAdvertList from "./JobAdverts/JobAdvertList";
import CityAdd from "./Cities/CityAdd";
import { ToastContainer } from "react-toastify";
import EmployerRegister from "./Register/EmployerRegister";
import JobSeekerRegister from "./Register/JobSeekerRegister";
import JobAdvertAdd from "./JobAdverts/JobAdvertAdd";
import JobAdvertListByPendingApproval from "./JobAdverts/JobAdvertListByPendingApproval";
import EmployerList from "./Employer/EmployerList";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Navi />
      <Container className="main">
        <Grid>
          <Grid.Row>
          <Grid.Column width={16}>
              <Route exact path="/" component={JobAdvertList} />
              <Route exact path="/city/getall" component={CitiesList} />
              <Route exact path="/city/add" component={CityAdd} />
              <Route path="/jobseeker/getall" component={JobSeekersList} />
              <Route path="/job/getall" component={JobsList} />
              <Route exact path="/employer/getall" component={EmployerList} />
              <Route exact path="/register/employer" component={EmployerRegister} />
              <Route exact path="/register/jobseeker" component={JobSeekerRegister} />
              <Route exact path="/jobadvert/add" component={JobAdvertAdd} />
              <Route exact path="/admin/jobadvert/pending" component={JobAdvertListByPendingApproval} />
              
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
