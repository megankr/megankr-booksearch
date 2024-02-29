const { AuthenticationError, signToken } = require('.../utils/auth');
const { User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);
                return user;
            }
            throw AuthenticationError;
        }
    },
}


module.exports = { typeDefs, resolvers };
