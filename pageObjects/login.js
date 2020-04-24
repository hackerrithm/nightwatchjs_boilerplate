/*
 * Page object for login page
 */

const elements = {

        /*
         * Page Elements
         */
        usernameField: `input[name="username"]`,
        passwordField: `input[name="password"]`,
        submitButton: '#login > button',
        authenticatedSelector: `body > div >  #content > div > h4`
}


const commands = {
        /**
         * Retrieves the values in the errors displayed on the screen
         */
        getErrorValues(res) {
                this.getText(elements.firstError, function (result) {
                        res(result.value)
                });
                return res
        },

        /**
         * Enters into the Username field
         * @param {String} Username Username to be entered
         */
        enterUsername(username) {
                this.waitForElementVisible(elements.usernameField)
                this.click(elements.usernameField)
                this.clearValue('@usernameField')
                return this.setValue('@usernameField', username)
        },

                /**
         * Enters into the password field
         * @param {String} password password to be entered
         */
        enterPassword(password) {
                this.waitForElementVisible(elements.passwordField)
                this.click(elements.passwordField)
                this.clearValue('@passwordField')
                return this.setValue('@passwordField', password)
        },

        /**
         * Click the submit button
         */
        clickSubmit() {
                this.click(elements.submitButton)
        },

        /**
         * @param {Number} index index of locator
         * get the value of the signUp field
         */
        getAuthenticatedFieldValue(res) {
                this.getText(`body > div >  #content > div > h4`, function (result) {
                        console.log("result: result");
                        
                        res(result.value)
                });
                return res
        }


}

module.exports = {
        commands: [commands],
        elements: elements,
};