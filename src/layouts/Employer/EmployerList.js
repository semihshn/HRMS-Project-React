import React, { useEffect, useState } from "react";
import { Card, Container, Grid, Icon, Image } from "semantic-ui-react";
import EmployerService from "../../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getAllEmployers()
      .then((result) => setEmployers(result.data.data));
  });
  return (
    <Container>
      <Grid>
        <Grid.Row>
          {employers.map((employer) => (
            <Grid.Column width={8}>
              <Card className="centered">
                <Image
                  src="https://i.ytimg.com/vi/dvwpuWeGZd8/maxresdefault.jpg"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>{employer.companyName}</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="user" />
                  10 Advert
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
}
