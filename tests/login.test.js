const loginData = require('../data/login')

describe("Login Test", () => {
  it("should display the correct homepage title", client => {
    client
      .url("https://the-internet.herokuapp.com/")
      .waitForElementVisible("body", 1000)
      .assert.title("The Internet");
  });

  for (let count in loginData) {
    it("verify that the user cannot sign up with an invalid username", client => {
      client.url("https://the-internet.herokuapp.com/login");
      console.log(loginData[count].validUsername);
      console.log(loginData[count].validPassword);

      const loginPage = client.page.login();

      loginPage.enterUsername(loginData[count].validUsername);
      loginPage.enterPassword(loginData[count].validPassword).clickSubmit();
      
      loginPage.assert.containsText(loginPage.elements.authenticatedSelector.selector, 'Welcome to the Secure Area. When you are done click logout below.')
    });
  }

  afterEach(function(browser, done) {
    browser.end(() => {
      done();
    });
  });
});
