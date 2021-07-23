import React from "react";
import { Route } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";
import CitiesList from "./CitiesList";
import JobSeekersList from "./JobSeekersList";
import JobsList from "./JobsList";
import Navi from "./Navi";
import JobAdvertList from "./JobAdvertList";
import CityAdd from "./CityAdd";
import { ToastContainer } from "react-toastify";
import EmployerRegister from "./EmployerRegister";
import JobSeekerRegister from "./JobSeekerRegister";

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
              <Route path="/jobseekers" component={JobSeekersList} />
              <Route path="/jobs" component={JobsList} />
              <Route exact path="/register/employer" component={EmployerRegister} />
              <Route exact path="/register/jobseeker" component={JobSeekerRegister} />
              
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
