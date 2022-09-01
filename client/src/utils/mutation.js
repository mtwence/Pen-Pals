import { gql } from '@apollo/client';

export const ADD_THOUGHT = gql`
    mutation addThought($thoughtText: String!, $thoughtAuthor: String!){
        addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
            _id
            thoughtText
            thoughtAuthor
            createdAt
            comments
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($thoughtId: ID!, $commentText: String!){
        addComment(thoughtId: $thoughtId, commentText: $commentText){
            
        }
    }
`;