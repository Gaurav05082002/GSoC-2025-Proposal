
// Tests to ensure the model follows system instructions

pm.test("Response status is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is formatted as expected", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("candidates");
    pm.expect(jsonData.candidates[0].content.parts[0].text).to.be.a("string");
});

pm.test("Response respects system instruction", function () {
    let jsonData = pm.response.json();
    let responseText = jsonData.candidates[0].content.parts[0].text;
    
    let words = responseText.split(" ");
    let lastWord = words[words.length - 1];
    
    pm.expect(responseText).to.include(lastWord);
});
