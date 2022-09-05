const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    letter: [Letter]!
  }
  type Letter {
    _id: ID
    letterText: String!
    letterAuthor: String!
    createdAt: Date
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: Date
  }

  type Query {
    letters: [Letter]!
    letter(letterId: ID!): Letter
  }

  type Mutation {
    addLetter(letterText: String!, letterAuthor: String!): Letter
    addComment(letterId: ID!, commentText: String!): Letter
    removeLetter(letterId: ID!): Letter
    removeComment(letterId: ID!, commentId: ID!): Letter
  }
`;

module.exports = typeDefs;
