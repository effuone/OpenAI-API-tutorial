import axios from "axios";
import 'dotenv/config'

const url = "https://api.openai.com/v1/engines/text-davinci-003/completions";
const openAiKey = process.env.OPENAI_API_KEY;
const postData = {
  prompt: "Write me a song about how cool Dalida is",
  max_tokens: 100,
};
const response = await axios.post(url, postData, {
  headers: {
    Authorization: `Bearer ${openAiKey}`,
  },
});
console.log(response.data.choices[0].text);