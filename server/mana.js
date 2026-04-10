import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const client = new OpenAI();

const response = await client.chat.completions.create({
    model : "gpt-4o",
    messages : [{
        role:"user",
        content: "tell me about the world war situation as of 11th april 2026?"
    }]

});

console.log(response.choices[0].message.content);