describe("Key Press Test", () => {
  it("verify that the key press on the page is", client => {
    const keyValue = "ENTER";
    client
      .url("https://the-internet.herokuapp.com/key_presses")
      .waitForElementVisible("body", 1000)
      .sendKeys("input[type=text]", keyValue)
      .assert.containsText(
        "#result",
        `You entered: ${keyValue.substr(-1).toUpperCase()}`
      )
      .pause(7000)
      .end();
  });

  afterEach(function(browser, done) {
    browser.end(() => {
      done();
    });
  });
});
