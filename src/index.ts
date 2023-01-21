import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { openAICall } from "./openAI.js";
import { openAIPrompt } from "./constants.js";

const port: number = 5432;
const app = express();

openAICall(openAIPrompt);
export const userMessage: string = "mada**d";

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
