
// This script initializes chat history for multi-turn conversation

console.log("Preparing chat conversation request");

let chatHistory = [
    {
        role: "user",
        parts: [{ text: "Hello" }]
    },
    {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }]
    }
];

pm.environment.set("chatHistory", JSON.stringify(chatHistory));
