
// Tests to validate API response when using text generation parameters

pm.test("Response status is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response contains 'candidates' array", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("candidates");
    pm.expect(jsonData.candidates).to.be.an("array").that.is.not.empty;
});

pm.test("Temperature, Top_p, and Top_k parameters were applied", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData.usageMetadata).to.have.property("totalTokenCount");
    pm.expect(pm.environment.get("temperature")).to.equal(0.7);
    pm.expect(pm.environment.get("top_p")).to.equal(0.9);
    pm.expect(pm.environment.get("top_k")).to.equal(40);
});
