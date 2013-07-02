Feature: Home Page
	List of topics
		On Click of topic name, loads "detail page" for that entry (v0.2)
	Form to "add new topic"
		On submit
			validates input for new topic  (*required)
			validates textarea for topic description (*required)
			validates input for name
			validates input for email
			If valid
				generates slug
				adds title to list
				adds pending icon to title
				sends data to server to be added to database
					on database return
						remove pending icon from title
						add saved icon to entry
						convert title to link (or maybe is already a link?)

	Scenario: on the home page
		Given I am on the Aletheia home page
		Then the first title on the page should be "Topic Sorter"

	Scenario: There is a container for topics
		Given I am on the Aletheia home page
		Then there is an element "#topics"

	Scenario: There is an "Add New Topic" form
		Given I am on the Aletheia home page
		When there is an element "#newTopic"
		Then there is a form "#newTopic" on the page containing 3 inputs, 1 textarea and 1 submit button

	Scenario: When the "Add New Topic" form is submitted, a the topic is added to the list of topics
		Given The "newTopic" form is filled with the following values "A New Topic", "My brand new topic that is really interesting to discuss", "Jorge", "j@me.com"
		When The Submit button is clicked
		Then A new topic matching "A New Topic" shows in the list of topics