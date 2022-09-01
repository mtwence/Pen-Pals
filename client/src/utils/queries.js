import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
    query allThoughts{
        thoughts {
            _id
            thoughtText
            thoughtAuthor
            createdAt
            comments
        }
    }
`;

export const QUERY_SINGLE_THOUGHT = gql`
    query singleThought($thoughtId: ID!){
        thought(thoughtId: $thoughtId) {
            _id
            thoughtText
            thoughtAuthor
            createdAt
            comments
        }
    }
`;