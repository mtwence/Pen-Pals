const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    affirmations: [String]
  }
  
  type Query {
    users: [User]!
    user (userId: ID!): User
  }

  type Mutation {
    addUser(id: ID!): User
    deleteUser(id: ID!): User
    updateUser(id: ID!, username: String!, email: String!, password: String!, affirmations: [String]): User
  }
`;

module.exports = typeDefs;

// can cerate coed to create Date type - setup utility for it etc 
// type Letter {
//   _id: ID
//   letterText: String!
//   letterAuthor: String!
//   createdAt: String!
//   Responses: [Letter]!
// }