import React from "react";
import { Container, Grid } from "semantic-ui-react";
import CitiesList from "./CitiesList";
import JobSeekersList from "./JobSeekersList";
import JobsList from "./JobsList";
import Navi from "./Navi";

export default function Dashboard() {
  return (
    <div>
      <Navi />
      <Container className="main">
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <JobsList />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <JobSeekersList />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <CitiesList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
