describe("File Download Test", () => {
  it("should navigate to download page to download an image", client => {
    client
      .url("https://the-internet.herokuapp.com/download")
      .waitForElementVisible("body", 1000)
      .click("link text", "wpx.png")
      .pause(1000)
      .assert.title("The Internet");
  });

  afterEach(function(browser, done) {
    browser.end(() => {
      done();
    });
  });
});
