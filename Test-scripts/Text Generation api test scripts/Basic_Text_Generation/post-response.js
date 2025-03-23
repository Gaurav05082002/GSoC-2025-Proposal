
// Tests to validate the API response for Basic Text Generation

pm.test("Response status is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is in JSON format", function () {
    pm.response.to.be.json;
});

pm.test("Response contains 'candidates' array", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("candidates");
    pm.expect(jsonData.candidates).to.be.an("array").that.is.not.empty;
});

pm.test("Each candidate contains 'content' and 'parts'", function () {
    let jsonData = pm.response.json();
    jsonData.candidates.forEach(candidate => {
        pm.expect(candidate).to.have.property("content");
        pm.expect(candidate.content).to.have.property("parts");
    });
});
