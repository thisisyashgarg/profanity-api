import dotenv from "dotenv";
dotenv.config();
import { openAICall } from "./openAI.js";
import { openAIPrompt } from "./constants.js";

openAICall(openAIPrompt);
