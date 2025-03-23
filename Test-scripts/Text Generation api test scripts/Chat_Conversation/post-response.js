
// Tests to validate multi-turn chat conversation responses

pm.test("Response status is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response contains chat continuation", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("candidates");
    pm.expect(jsonData.candidates[0].content.parts[0].text).to.be.a("string");
});

pm.test("Chat history is correctly updated", function () {
    let jsonData = pm.response.json();
    let updatedChatHistory = JSON.parse(pm.environment.get("chatHistory"));
    
    updatedChatHistory.push({
        role: "user",
        parts: [{ text: "How many paws do my 2 dogs have?" }]
    });

    pm.environment.set("chatHistory", JSON.stringify(updatedChatHistory));

    pm.expect(updatedChatHistory.length).to.be.greaterThan(2);
});
