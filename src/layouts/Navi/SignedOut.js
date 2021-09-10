import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Menu,
  Modal,
  Segment,
} from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Menu.Item>
        <Button as={NavLink} to="/login" primary>
          Giriş Yap
        </Button>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Button
              as={NavLink}
              to="/register/jobseeker"
              primary
              style={{ marginLeft: "0.5em" }}
            >
              Kayıt Ol
            </Button>
          }
        >
          <Segment placeholder>
            <Grid columns={2} stackable textAlign="center">
              <Divider vertical>Or</Divider>

              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <Header icon>
                    <Icon color="red" name="hotjar" />
                    Hayalindeki İş yerini Bul
                  </Header>
                  <Button
                    onClick={() => setOpen(false)}
                    color="red"
                    as={NavLink}
                    to="/register/jobseeker"
                  >
                    Seç
                  </Button>
                </Grid.Column>

                <Grid.Column>
                  <Header icon>
                    <Icon color="blue" name="theme" />
                    Hayalindeki İş Arkadaşını Bul
                  </Header>
                  <Button
                    onClick={() => setOpen(false)}
                    as={NavLink}
                    to="/register/employer"
                    primary
                  >
                    Seç
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Modal>
      </Menu.Item>
    </div>
  );
}
