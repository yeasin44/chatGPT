const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;

const configuration = new Configuration({
  organization: 'org-mTzmYv5RVFkDP7hGHzRSgaxj',
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/', async (req, res) => {
  const { message } = req.body;
  // console.log(message);
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });

  res.json({
    message: response.data.choices[0].text,
  });
});

app.listen(port, () => {
  console.log(`ChatGPT running on port ${port}`);
});
