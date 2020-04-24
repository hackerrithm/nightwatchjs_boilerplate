describe("Standard File Upload", () => {
  it("should navigate to download page to download an image", client => {
    client
      .url("https://the-internet.herokuapp.com/upload")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible('input[type="file"]', 1000)
      .setValue(
        'form input[type="file"]',
        require("path").resolve(__dirname + "/wpx.png")
      )
      .click("#file-submit")
      .pause(1000)
      .assert.containsText("h3", "File Uploaded!")
      .end();
  });

  afterEach(function(browser, done) {
    browser.end(() => {
      done();
    });
  });
});
