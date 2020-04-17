// const loginData = require('../data/login')

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
      //       .setValue('input[type="file"]', "https://the-internet.herokuapp.com/upload/wpx.png")
      //       .click("#file-submit")
      //       .pause(1000)
      //       .assert.containsText("h3", "File Uploaded!")
      //       .end();

      //       .waitForElementVisible('body', 1000)
      //       .waitForElementVisible('input#file-upload', 1000)
      .pause(1000)
      //       .setValue('input#file-upload', require('path').resolve(__dirname + '/wpx.png')) // Works
      //      .setValue('input#fileUpload', "testfile.txt") // Will not work
      //      .setValue('input#fileUpload', "http://localhost:3000/testfile.txt") // Will not work
      //      .setValue('input[type="file"]', require('path').resolve(__dirname + '/testfile.txt')) // Will not work
      //       .click('#file-submit')
      //       .pause(1000)
      .assert.containsText("h3", "File Uploaded!")
      .end();
  });

  // it("should click link to download file", client => {
  //     loginPage.clickLink();

  // })

  afterEach(function(browser, done) {
    browser.end(() => {
      done();
    });
  });
});
