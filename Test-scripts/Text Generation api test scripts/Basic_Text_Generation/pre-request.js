
// This script runs before the request is sent
// It ensures that the API key is set and logs the request details

console.log("Preparing request for Basic Text Generation");

if (!pm.environment.get("GEMINI_API_KEY")) {
    console.error("API Key is missing. Please set GEMINI_API_KEY in the environment.");
    pm.environment.set("request_ready", false);
} else {
    pm.environment.set("request_ready", true);
}

pm.environment.set("timestamp", new Date().toISOString());
console.log("Timestamp set for request:", pm.environment.get("timestamp"));
