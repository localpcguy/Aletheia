var myStepsDefiniteWrapper = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^I am on the Aletheia home page$/, function(callback) {
        this.browser.visit('http://localhost:3000/', callback);
    });

    this.Then(/^the first title on the page should be "([^"]*)"$/, function(title, callback) {
        if (!this.isOnPageWithTitle(title)) {
          callback.fail(new Error('Expected title to be: ' + title));
        } else {
          callback();
        }
    });


    this.Given(/^I am on the Aletheia home page$/, function(callback) {
        this.browser.visit('http://localhost:3000/', callback);
    });

    this.Then(/^there is an element "([^"]*)"$/, function(elId, callback) {
      if (!this.hasElementOnPage(elId)) {
          callback.fail(new Error('Expected an element with ID: ' + elId));
        } else {
          callback();
        }
    });


    this.Given(/^I am on the Aletheia home page$/, function(callback) {
        this.browser.visit('http://localhost:3000/', callback);
    });

    this.Then(/^there is an element "([^"]*)"$/, function(elId, callback) {
      if (!this.hasElementOnPage(elId)) {
          callback.fail(new Error('Expected an element with ID: ' + elId));
        } else {
          callback();
        }
    });

    this.Then(/^there is a form "([^"]*)" on the page containing (\d+) inputs, (\d+) textarea and (\d+) submit button$/, function(formId, numInputs, numTextAreas, numSubmit, callback) {
        if (!this.hasForm(formId, numInputs, numTextAreas, numSubmit)) {
            callback.fail(new Error('The form did not have the expected elements:'));
        } else {
          callback();
        }
    });

    this.Given(/^The "([^"]*)" form is filled with the following values "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, function(formId, title, desc, name, email, callback) {
        if (!this.fillForm(formId, title, desc, name, email)) {
            (new Error('The form was not able to be filled with the given data.'));
        } else {
            callback();
        }

    });

    this.When(/^The Submit button is clicked$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    this.Then(/^A new topic matching "([^"]*)" shows in the list of topics$/, function(arg1, callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });



};

module.exports = myStepsDefiniteWrapper;