import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { username: formState.username, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <h2>Login</h2>
      <form class="mx-1 mx-md-4" onSubmit={handleFormSubmit}>
        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fa fa-user fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
          <input
            placeholder="Your Username, Please"
            name="username"
            type="username"
            id="username"
            class="form-control"
            onChange={handleChange}
          />
          <label class="form-label" htmlFor="username">Username</label>
          </div>
        </div>
        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fa fa-lock fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input
            placeholder="Your Password, Please"
            name="password"
            type="password"
            id="pwd"
            class="form-control"
            onChange={handleChange}
          />
            <label class="form-label" htmlFor="pwd">Password</label>
          </div>
        </div>
        {error ? (
          <div>
            <p className="error-text">The username or password is incorrect.</p>
          </div>
        ) : null}
        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="submit" class="btn btn-primary btn-lg">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;