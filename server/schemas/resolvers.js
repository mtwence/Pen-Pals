const { AuthenticationError } = require('apollo-server-express');
const { User, Letter } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    letters: async () => {
      return Letter.find().sort({ createdAt: -1 });
    },

    letter: async (parent, { letterId }) => {
      return Letter.findOne({ _id: letterId });
    },
    // responses: async (parent, { responses }) => {
    //   return Letter.find({ _id: responses });
    // },

    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);

        return { token, user };
      },
      // login: async (parent, { email, password }) => {
      //   const user = await User.findOne({ email });

      //   if (!user) {
      //     throw new AuthenticationError('No user with this email found!');
      //   }

      //   const correctPw = await user.isCorrectPassword(password);

      //   if (!correctPw) {
      //     throw new AuthenticationError('Incorrect password!');
      //   }

      //   const token = signToken(user);
      //   return { token, user };
      // },
      addLetter: async (parent, { letterText, letterAuthor }) => {
        return Letter.create({ letterText, letterAuthor });
      },
      // addResponse: async (parent, { letterId, letterText }) => {
      //   return Letter.findOneAndUpdate(
      //     { _id: letterId },
      //     {
      //       $addToSet: { responses: { letterText } },
      //     },
      //     {
      //       new: true,
      //       runValidators: true,
      //     }
      //   );
      // },
      removeLetter: async (parent, { letterId }) => {
        return Letter.findOneAndDelete({ _id: letterId });
      },
      // removeResponse: async (parent, { letterId }) => {
      //   return Letter.findOneAndUpdate(
      //     { _id: letterId },
      //     { $pull: { responses: { _id: letterId } } },
      //     { new: true }
      //   );
      // },
    },
  },
};

  module.exports = resolvers;
