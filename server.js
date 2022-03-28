import express from "express";
const app = express();
import {  
  tracing,
  qMantis,
  registerLatency,
  responseTime,
  collectData 
  } from "qmantis-xp";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import cors from 'cors';
import schema from './graphql/schema.js';
import 'dotenv/config'

mongoose
  .connect(process.env.DB)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

Promise = global.Promise;

app.use(cors())
app.use("/graphql", collectData);
app.use("/graphql", responseTime(registerLatency));
app.use("/graphql", graphqlHTTP(qMantis(schema))); 

app.listen(4000, () => {
  console.log('Listening on port 4000');
});