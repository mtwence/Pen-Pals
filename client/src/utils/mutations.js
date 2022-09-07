import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $email: String!, $password: String!) {
    login(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const DELETE_USER = gql`
mutation deleteUser($_id: String) {
  deleteUser(id: $_id) {
    user {
      _id
    }
  }
}
`;

// export const ADD_LETTER = gql`
//   mutation addLetter($letterText: String!, $letterAuthor: String!) {
//     addLetter(letterText: $letterText, letterAuthor: $letterAuthor) {
//       _id
//       letterText
//       letterAuthor
//       createdAt
//       responses
//     }
//   }
// `;

// export const ADD_RESPONSE = gql`
//     mutation addResponse($letterId: ID!, $commentText: String!){
//         addResponse(letterId: $letterId, commentText: $commentText){
//             responses {
//                 responseText
//                 createdAt
//             }
//         }
//     }
// `;
