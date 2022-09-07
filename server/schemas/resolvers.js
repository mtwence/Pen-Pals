const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  //Defining     the query and mutation functionality to work with the Mongoose models
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const dbUserData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return dbUserData;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
  },

    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      },
  
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("Invalid credentials, user not found.");
        }
      },

      removeUser: async (parent, { id }) => {
        return User.findByIdAndRemove(id);
      }

      updateUser: async (parent, { id, affirmations }) => {
        return User.findOneAndUpdate(
          { _id: id },
          {
            $addToSet: { affirmations: [affirmations]},
          }
        )
      },
    },
  };

  module.exports = resolvers;



    // letters: async () => {
    //   return Letter.find().sort({ createdAt: -1 });
    // },

    // letter: async (parent, { _id }) => {
    //   return Letter.findOne({ _id: _id });
    // },
    // responses: async (parent, { responses }) => {
    //   return Letter.find({ _id: responses });
    // },

        // login: async (parent, { email, password }) => {
      //   const user = await User.findOne({ email });

      //   if (!user) {
      //     throw new AuthenticationError("No user with this email found!");
      //   }

      //   const correctPw = await user.isCorrectPassword(password);

      //   if (!correctPw) {
      //     throw new AuthenticationError("Incorrect password!");
      //   }

      //   const token = signToken(user);
      //   return { token, user };
      // },
      // addLetter: async (parent, { letterText, letterAuthor }) => {
      //   return Letter.create({ letterText, letterAuthor });
      // },
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
      // removeLetter: async (parent, { _id }) => {
      //   return Letter.findOneAndDelete({ _id: _id });
      // },
      // removeResponse: async (parent, { letterId }) => {
      //   return Letter.findOneAndUpdate(
      //     { _id: letterId },
      //     { $pull: { responses: { _id: letterId } } },
      //     { new: true }
      //   );
      // },

// const { AuthenticationError } = require("apollo-server-express");
// //const { User, Letter } = require("../models");
// const { User } = require("../models");
// const { signToken } = require("../utils/auth");

// const resolvers = {
//   Query: {
//     users: async () => {
//       return User.find();
//     },
//     user: async (parent, { _id }) => {
//       return User.findOne({ _id: _id });
//     },
//     // letters: async () => {
//     //   return Letter.find().sort({ createdAt: -1 });
//     // },

//     // letter: async (parent, { _id }) => {
//     //   return Letter.findOne({ _id: _id });
//     // },
//     // responses: async (parent, { responses }) => {
//     //   return Letter.find({ _id: responses });
//     // },

//     Mutation: {
//       addUser: async (parent, args) => {
//         const user = await User.create(args);
//         const token = signToken(user);
//         return { token, user };
//       },
//       // login: async (parent, { email, password }) => {
//       //   const user = await User.findOne({ email });

//       //   if (!user) {
//       //     throw new AuthenticationError("No user with this email found!");
//       //   }

//       //   const correctPw = await user.isCorrectPassword(password);

//       //   if (!correctPw) {
//       //     throw new AuthenticationError("Incorrect password!");
//       //   }

//       //   const token = signToken(user);
//       //   return { token, user };
//       // },
//       // addLetter: async (parent, { letterText, letterAuthor }) => {
//       //   return Letter.create({ letterText, letterAuthor });
//       // },
//       // addResponse: async (parent, { letterId, letterText }) => {
//       //   return Letter.findOneAndUpdate(
//       //     { _id: letterId },
//       //     {
//       //       $addToSet: { responses: { letterText } },
//       //     },
//       //     {
//       //       new: true,
//       //       runValidators: true,
//       //     }
//       //   );
//       // },
//       // removeLetter: async (parent, { _id }) => {
//       //   return Letter.findOneAndDelete({ _id: _id });
//       // },
//       // removeResponse: async (parent, { letterId }) => {
//       //   return Letter.findOneAndUpdate(
//       //     { _id: letterId },
//       //     { $pull: { responses: { _id: letterId } } },
//       //     { new: true }
//       //   );
//       // },
//     },
//   },
// };

// module.exports = resolvers;
