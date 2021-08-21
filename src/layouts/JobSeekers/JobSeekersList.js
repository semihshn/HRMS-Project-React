import React, { useState, useEffect } from "react";
import { Card, Image, Label } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";

export default function JobSeekersList() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getAllJobSeekers()
      .then((result) => setJobSeekers(result.data.data));
  });

  return (
    <div>
      <Card.Group>
        {jobSeekers.map((jobSeeker) => (
          <Card fluid>
            <Card.Content>
              <Image
                floated="left"
                size="tiny"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                circular
              />
              <Card.Header>{`${jobSeeker.firstName} ${jobSeeker.lastName}`}</Card.Header>
              <Card.Meta>{jobSeeker.job.jobName}</Card.Meta>
              <Card.Meta>
                <Label as="b" tag>
                TC : <strong>{jobSeeker.nationalityId}</strong>
                </Label>
                <Label as="b" color="red" tag>
                E-mail : <strong>{jobSeeker.user.email}</strong>
                </Label>
                <Label as="b" color="teal" tag>
                Doğum Tarihi : <strong>{jobSeeker.yearOfBirth}</strong>
                </Label>
              </Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      {/* <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Soyisim</Table.HeaderCell>
            <Table.HeaderCell>Tc</Table.HeaderCell>
            <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
            <Table.HeaderCell>Meslek</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.nationalityId}</Table.Cell>
              <Table.Cell>{jobSeeker.yearOfBirth}</Table.Cell>
              <Table.Cell>{jobSeeker.job.jobName}</Table.Cell>
              <Table.Cell>{jobSeeker.user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table> */}
    </div>
  );
}
