
// This script ensures that required parameters are present
// It sets dynamic parameters for better testing

console.log("Preparing request for Text Generation with Parameters");

pm.environment.set("temperature", 0.7);
pm.environment.set("maxOutputTokens", 100);
pm.environment.set("top_p", 0.9);
pm.environment.set("top_k", 40);
