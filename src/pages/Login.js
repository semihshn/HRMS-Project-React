import React from "react";
import { Button, Grid, Header, Segment } from "semantic-ui-react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthenticationService from "../services/authenticationService";
import SemxTextInput from "../utilities/customFormControls/SemxTextInput";
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setAuthenticate } from "../store/actions/authenticateActions";

export default function Login() {

  const dispatch = useDispatch()
  const history=useHistory();

  const initialValues = {
    email: "",
    password: ""
  };

  const schema = Yup.object({
    email: Yup.string().required("E-mail zorunludur"),
    password: Yup.string().required("Lütfen şifrenizi giriniz")
  });

  const login = (email, password) => {
    let authenticationService = new AuthenticationService();
    return authenticationService
      .login(email, password)
      .then((response) => response);
  };

  const handleSetAuthenticate=(station)=>{

    dispatch(setAuthenticate(station))

  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
            
            login(values.email, values.password).then((data) => {
              if (data.data.success) {
                localStorage.setItem('authority', data.data.data.authority);
                handleSetAuthenticate(true)
                localStorage.setItem('email', data.data.data.email);
                localStorage.setItem('userId', data.data.data.userId);
                history.push("/")
              }
            });
          }}
        >
          <Form className="ui form">
            <Segment stacked>
              <SemxTextInput name="email" placeholder="email" />
              <SemxTextInput
                name="password"
                placeholder="password"
                type="password"
              />

              <Button type="submit" color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
        </Formik>
      </Grid.Column>
    </Grid>
  );
}
