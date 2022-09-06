import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ username: '', email: '',password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.username,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="col-4 container h-100">
      <h2>Signup</h2>
      <form class="mx-1 mx-md-4" onSubmit={handleFormSubmit}>
        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fa fa-user fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
          <input
            placeholder="What will be your username?"
            name="username"
            type="username"
            id="username"
            class="form-control"
            onChange={handleChange}
          />
          <label class="form-label" htmlFor="username">Username:</label>
        </div>
        </div>
        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fa fa-envelope fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
          <input
            placeholder="What is your email?"
            name="email"
            type="email"
            id="email"
            class="form-control"
            onChange={handleChange}
          />
          <label class="form-label" htmlFor="email">Email:</label>
        </div>
      </div>
        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fa fa-lock fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
          <input
            placeholder="What password will you set?"
            name="password"
            type="password"
            id="pwd"
            class="form-control"
            onChange={handleChange}
          />
          <label class="form-label" htmlFor="pwd">Password:</label>
        </div>
      </div>
      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button type="submit" class="btn btn-primary btn-lg">Register</button>
      </div>
      </form>
    </div>
  );
}

export default Signup;
