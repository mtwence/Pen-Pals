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
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addLetter: async (parent, { letterText, letterAuthor }) => {
      return Letter.create({ letterText, letterAuthor });
    },
    addComment: async (parent, { letterId, commentText }) => {
      return Letter.findOneAndUpdate(
        { _id: letterId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeLetter: async (parent, { letterId }) => {
      return Letter.findOneAndDelete({ _id: letterId });
    },
    removeComment: async (parent, { letterId, commentId }) => {
      return Letter.findOneAndUpdate(
        { _id: letterId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
