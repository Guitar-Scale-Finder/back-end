const resolvers = {
  Query: {
    async hello() {
      return "Hello, world!";
    },
  },
};

module.exports = resolvers;
