import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyB_Ik-yHS_76UIRgx4Wqw-eaNONPB0qmfA";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function runChat(prompt) {
    const chat = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chat.sendMessage(prompt);
    const response=result.response;
    console.log(result.response.text());
  }
  
  export default runChat;
