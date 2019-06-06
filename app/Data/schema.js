const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

// Define our schema using the GraphQL schema language
const typeDefs = `
  type User {
    ID: Int!
    user_login: String!
    user_email: String!
    user_pass: String!
    posts: [Post]
  }
  type Post {
    ID: Int!
    post_title: String!
    guid: String!
    post_content: String!
    user: User!
  }
  type Query {
    allUsers: [User]
    fetchUser(id: Int!): User
    allPosts: [Post]
    fetchPost(id: Int!): Post
  }
  type Mutation {
    login (user_email: String!, user_pass: String!): String
    createUser (username: String!, email: String!, password: String!): User
    addPost (title: String!, content: String!): Post
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
