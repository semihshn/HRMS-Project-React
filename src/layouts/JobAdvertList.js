import React, { useEffect, useState } from "react";
import { Button, Card, Icon, Statistic } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getAllJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  });

  return (
      
    <Card.Group>
      {jobAdverts.map((jobAdvert) => (
        <Card >
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
          <Card.Content extra>
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
      ))}
    </Card.Group>
  );
}
