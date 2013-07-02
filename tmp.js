P--UUUUUU

3 scenarios (2 undefined, 1 pending)
9 steps (6 undefined, 1 pending, 2 skipped)

You can implement step definitions for undefined steps with these snippets:

this.Given(/^that we are on the home page$/, function(callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^the page is loaded$/, function(callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^there is an element "([^"]*)"$/, function(arg1, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Given(/^an "([^"]*)" button$/, function(arg1, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^the "([^"]*)" button is clicked$/, function(arg1, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^there is a form the page containing (\d+) inputs, a textarea and a submit button$/, function(arg1, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

