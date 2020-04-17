/*
 * Page object for signUp page
 */

const elements = {

        /*
         * Page Elements
         */
        result: `#result`,
}


const commands = {

        submitKeyPress(res) {
                // return this.keys(value);
                this.getText('#result', function (result) {
                        console.log("result: result");
                        
                        res(result.value)
                });
                return res
        },

}

module.exports = {
        commands: [commands],
        elements: elements,
};