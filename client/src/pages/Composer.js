import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_LETTER } from '../../utils/mutations';
import Auth from '../utils/auth';

const letterComposer = ({ letterId }) => {
  const [letterContent, setLetterContent] = useState('');

  const [addLetter, { error }] = useMutation(ADD_LETTER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addLetter({
        variables: {
          letterId,
          letterContent,
          letterAuthor: Auth.getProfile().data.username,
        },
      });

      setLetterContent('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'lettercontent' && value.length <= 800) {
      setCommentText(value);;
    }
  };

  return (
    <div>


      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 800 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/800
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="letter Content"
                placeholder="...how are you feeling lately?"
                value={letterContent}
                className="form-input"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Send Letter
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to write a letter Please{' '}
          <Link to="/Login">login</Link>
        </p>
      )}
    </div>
  );
};

export default Composer;
