// const loginData = require('../data/login')

describe("Key Press Test", () => {
  it("verify that the key press on the page is", client => {
              const keyValue = "ENTER";
    client
      .url("https://the-internet.herokuapp.com/key_presses")
      .waitForElementVisible("body", 1000)
//       .setValue('input[type=text]', keyValue)
.sendKeys('input[type=text]', keyValue)
//       .keys(client.Keys.ENTER)
//       .sendKeys(client.Keys..sendKeys('div[id=container]', browser.Keys.DOWN_ARROW))
      .assert.containsText('#result', `You entered: ${keyValue.substr(-1).toUpperCase()}`)
      .pause(7000)
      .end();

      /*
      .setValue('input[type=text]', keyValue)
      .keys(client.Keys.ENTER)

      ----
      .url("https://the-internet.herokuapp.com/key_presses")
      .waitForElementVisible("body", 1000)
      .keyValue('input[type=text]', keyValue)
      .keys(keyValue, function (done) {
        client.pause(5000);
        console.log("here:: ", client.Keys.ENTER);
        console.log("here 2 :: ", `${keyValue.toUpperCase()}`);
        client.expect.element('#result').text.to.equal(`You entered: ${keyValue.toUpperCase()}`);//.assert.containsText('#result', `You entered: ${keyValue.toUpperCase()}`)
      })
//       .pause(7000)
      .end();

      ---

      */
      //       .expect.element("#result")
      //       .text.to.equal(`You entered: ${keyValue.toUpperCase()}`);
//       .sendKeys('#result',client.Keys.ENTER)
//       .assert.containsText('#result', `You entered: ${keyValue.toUpperCase()}`)
  });

  afterEach(function(browser, done) {
    browser.end(() => {
      done();
    });
  });
});
