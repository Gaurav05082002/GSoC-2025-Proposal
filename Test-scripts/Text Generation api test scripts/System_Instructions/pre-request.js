
// This script sets a system instruction to guide the model's response behavior

console.log("Setting system instruction for the request");

pm.environment.set("systemInstruction", "You are an assistant that only answers in rhymes.");
