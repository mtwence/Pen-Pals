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
    createdAt: String!
    Responses: [Letter]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String!
  }

  type Query {
    letters: [Letter]!
    letter(letterId: ID!): Letter
    users: [User]!
    user (userId: ID!): User
  }

  type Mutation {
    addLetter(letterText: String!, letterAuthor: String!): Letter
    removeLetter(letterId: ID!): Letter
    addUser(userId: ID!): User
  }
`;

module.exports = typeDefs;

// can cerate coed to create Date type - setup utility for it etc 