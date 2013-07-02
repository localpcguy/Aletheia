// features/support/world.js

var zombie = require('zombie');
var World = function World(callback) {
    this.browser = new zombie(); // this.browser will be available in step definitions

    this.visit = function(url, callback) {
        this.browser.visit(url, callback);
    };

    this.isOnPageWithTitle = function(title) {
        return this.browser.text('H1') === title;
    };

    this.hasElementOnPage = function(elementId) {
        var elId = elementId.substring(0,1) === '#' ? elementId.substring(1, elementId.length) : elementId;
        var el = this.browser.document.getElementById(elId);
        return el !== null;
    };

    this.hasForm = function(formId, numInputs, numTextAreas, numSubmit) {
        var bDOM, form, numFormInputs = 0, numFormTA = 0, numFormSubmit = 0;

        formId = formId.substring(0,1) === '#' ? formId.substring(1, formId.length) : formId;
        form = this.browser.document.getElementById(formId);
        numFormInputs = this.browser.queryAll('input', form).length;
        numFormTA = this.browser.queryAll('textarea', form).length;
        numFormSubmit = this.browser.queryAll('submit', form).length;

        return numInputs == numFormInputs && numTextAreas == numFormTA && numSubmit == numFormSubmit;
    };


    //browser.text(selector, context?) : String
    //Returns the text contents of the selected elements.
    
    //browser.fill(field, value, callback) : this
    //Fill in a field: input field or text area.

    //browser.pressButton(selector, callback)
    //Press a button. Typically this will submit the form


    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};
exports.World = World;