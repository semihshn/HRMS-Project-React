import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Icon,
  Label,
  Statistic,
} from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getAllJobAdvertsByIsActive(false)
      .then((result) => setJobAdverts(result.data.data));
  },[jobAdverts]);

  function deleteAdvert(advertId) {
      let jobAdvertService = new JobAdvertService();
      jobAdvertService.delete(advertId)
  }

  function handledToIsActive(id) {
    let advert=jobAdverts.find(item=>item.id===id)
    advert.active=true
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.updateToIsActive(advert)
}

  return (
    <Container>
      <Grid>
        <Grid.Row>
          {jobAdverts.map((jobAdvert) => (
            
            <Grid.Column key={jobAdvert.id} width={8}>
              <Card.Group className="centered">
                <Card style={{ marginTop: "3em" }}>
                  <Card.Content>
                    <Icon floated="right" name="briefcase" />
                    <Card.Header>{jobAdvert.job.jobName}</Card.Header>
                    <Card.Meta>{jobAdvert.city.name}</Card.Meta>
                    <Card.Description>
                      <Statistic
                        size="mini"
                        color="green"
                        label="Min Salary"
                        value={jobAdvert.minSalary + "$"}
                      />
                      <Statistic
                        size="mini"
                        color="green"
                        label="Max Salary"
                        value={jobAdvert.maxSalary + "$"}
                      />
                    </Card.Description>
                    <Label style={{wordWrap:"break-word"}} as="b" tag>
                  Çalışma Süresi : <div style={{wordWrap:"break-word",width:"200px"}}>{jobAdvert.workingTimeType}</div>
                </Label><br/><br/>
                <Label as="b" tag>
                Çalışma Türü : <div style={{wordWrap:"break-word",width:"200px"}}>{jobAdvert.workingType}</div>
                </Label>
                  </Card.Content>
                  <Card.Content>
                    <div className="ui">
                      <Button
                        onClick={()=>deleteAdvert(jobAdvert.id)}
                        color="red"
                        content="Onaylama"
                        icon="thumbs down outline"
                        label={{
                          basic: true,
                          color: "red",
                          pointing: "left",
                          content: "2,048",
                        }}
                      />
                      <Button
                        onClick={()=>handledToIsActive(jobAdvert.id)}
                        color="green"
                        content="Onayla"
                        icon="thumbs up"
                        label={{
                          basic: true,
                          color: "green",
                          pointing: "left",
                          content: "2,048",
                        }}
                      />
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
}
