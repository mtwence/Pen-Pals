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
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    addUser(id: ID!): User
    deleteUser(id: ID!): User
    updateUser(id: ID!, username: String!, email: String!, password: String!, affirmations: [String]): User
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
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
// const { gql } = require("apollo-server-express");

// const typeDefs = gql`
//   type User {
//     _id: ID
//     username: String!
//     email: String!
//     password: String!
//   }

//   type Query {
//     users: [User]!
//     user(userId: ID!): User
//   }

//   type Auth {
//     token: ID
//     user: User
//   }

//   type Mutation {
//     addUser(username: String!, email: String!, password: String!): Auth
//   }
// `;

// module.exports = typeDefs;

// // can cerate coed to create Date type - setup utility for it etc
// // type User {
// //   _id: ID!
// //   username: String!
// //   email: String!
// //   password: String!
// //   letter: [Letter]!
// // }
// // type Mutation {
// //   addLetter(letterText: String!, letterAuthor: String!): Letter
// //   removeLetter(letterId: ID!): Letter
// //   addUser(userId: ID!): User
// //   login(username: String!, email: String!, password: String!): Auth
// // }
// // type Letter {
// //   _id: ID
// //   letterText: String!
// //   letterAuthor: String!
// //   createdAt: String!
// //   Responses: [Letter]!
// // }

// // type Query {
// //   letters: [Letter]!
// //   letter(letterId: ID!): Letter
// //   users: [User]!
// //   user(userId: ID!): User
// // }
