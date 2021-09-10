import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
//import { getAllJobAdvert, getAllJobAdvertsByIsActive } from "../../store/actions/jobAdvertActions";
import { getAllJobAdvert, getAllJobAdvertsByIsActive } from "../../toolkit/features/jobAdvertSlice";
import { useAppSelector } from "../../toolkit/store";

export default function JobAdvertList() {
  //const storeJobAdverts = useSelector(state => state.jobAdverts.jobAdverts.data)
  const toolkitJobAdvert = useAppSelector(state=>state.jobAdvert)
  const dispatch=useDispatch()
  //const [jobAdverts, setJobAdverts] = useState([]);

   useEffect(() => {
    // let jobAdvertService = new JobAdvertService();
    // jobAdvertService
    //   .getAllJobAdvertsByIsActive(true)
    //   .then((result) => setJobAdverts(result.data.data));
    dispatch(getAllJobAdvertsByIsActive(true))
   },[]);
  return (
    <Container>
      <Grid>
        <Grid.Row>
          {toolkitJobAdvert.data && toolkitJobAdvert.data.data.map((jobAdvert) => (
            <Grid.Column width={8}>
              <Card.Group className="centered">
                <Card key={jobAdvert.id} style={{ marginTop: "3em" }}>
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
                  </Card.Content>
                  <Label style={{ wordWrap: "break-word" }} as="b" tag>
                    Çalışma Süresi :{" "}
                    <div style={{ wordWrap: "break-word", width: "200px" }}>
                      {jobAdvert.workingTimeType}
                    </div>
                  </Label>
                  <br />
                  <br />
                  <Label as="b" tag>
                    Çalışma Türü :{" "}
                    <div style={{ wordWrap: "break-word", width: "200px" }}>
                      {jobAdvert.workingType}
                    </div>
                  </Label>
                  <Card.Content>
                    <div className="ui">
                      <Button
                        color="red"
                        content="Başvur"
                        icon="save"
                        label={{
                          basic: true,
                          color: "red",
                          pointing: "left",
                          content: "2,048",
                        }}
                      />
                      <Button
                        color="blue"
                        content="Favorilere Ekle"
                        icon="thumbs up outline"
                        label={{
                          basic: true,
                          color: "blue",
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
