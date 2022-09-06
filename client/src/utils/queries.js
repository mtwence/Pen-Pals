import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      username
      letters {
        _id
        letterText
        responses {
          responseText
        }
      }
    }
  }
`;

export const QUERY_LETTERS = gql`
    query allLetters{
        letters {
            _id
            letterText
            letterAuthor
            createdAt
            comments
        }
    }
`;

export const QUERY_SINGLE_LETTER = gql`
    query singleLetter($letterId: ID!){
        letter(letterId: $letterId) {
            _id
            letterText
            letterAuthor
            createdAt
            comments
        }
    }
`;