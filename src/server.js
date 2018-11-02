import { ApolloServer, gql } from 'apollo-server';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

// Import typeDefs and resolvers
import resolvers from './resolvers'
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');

// Import Environment Variables and Mongoose Model
require('dotenv').config({
  path: 'variables.env'
});
import User from './models/User';
import Post from './models/Post';

// Connect to MLab Database
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true }
).then(() => console.log('DB connected'))
.catch(err => console.error(err));

// Create Apollo/Graphql Server useing typeDefs, resolvers, and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Post,
    User
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`)
});