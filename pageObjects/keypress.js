/*
 * Page object for key press page
 */

const elements = {

        /*
         * Page Elements
         */
        result: `#result`,
}


const commands = {

        submitKeyPress(res) {
                this.getText('#result', function (result) {

                        res(result.value)
                });
                return res
        },

}

module.exports = {
        commands: [commands],
        elements: elements,
};