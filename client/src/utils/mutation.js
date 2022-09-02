import { gql } from '@apollo/client';

export const ADD_LETTER = gql`
    mutation addLetter($letterText: String!, $letterAuthor: String!){
        addLetter(letterText: $letterText, letterAuthor: $letterAuthor) {
            _id
            letterText
            letterAuthor
            createdAt
            comments
        }
    }
`;

export const ADD_RESPONSE = gql`
    mutation addResponse($letterId: ID!, $commentText: String!){
        addResponse(letterId: $letterId, commentText: $commentText){
            responses {
                responseText
                createdAt
            }
        }
    }
`;