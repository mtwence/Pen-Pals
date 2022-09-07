import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

function Signup(props) {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await addUser({
        variables: { ...userFormData },
      });
      Auth.login(response.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div class="col-4 container h-100">
      <h2>Signup</h2>
      <Form
        class="mx-1 mx-md-4"
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
      >
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>
        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fa fa-user fa-lg me-3 fa-fw"></i>
          <Form.Group>
            <div class="form-outline flex-fill mb-0">
              <Form.Control
                placeholder="What will be your username?"
                name="username"
                type="username"
                id="username"
                class="form-control"
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name.
              </Form.Control.Feedback>
              <Form.Label htmlFor="username">Username:</Form.Label>
            </div>
          </Form.Group>
        </div>
        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fa fa-envelope fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <Form.Control
              placeholder="What is your email?"
              name="email"
              type="email"
              id="email"
              class="form-control"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter an email.
            </Form.Control.Feedback>
            <Form.Label htmlFor="email">Email:</Form.Label>
          </div>
        </div>
        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fa fa-lock fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <Form.Control
              placeholder="What password will you set?"
              name="password"
              type="password"
              id="password"
              class="form-control"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
            <Form.Label htmlFor="password">Password:</Form.Label>
          </div>
        </div>
        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <Button
            disabled={
              !(
                userFormData.username &&
                userFormData.email &&
                userFormData.password
              )
            }
            type="submit"
            variant="success"
            class="btn btn-primary btn-lg"
          >
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
