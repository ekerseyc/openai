require('dotenv').config();

// HTML variables

// openAI call
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion("text-davinci-002", {
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 6,
});