# {Company Name} Technical Test

This technical test is split into two sections, Section A and Section B. Section A aims to test your understanding of API testing using Postman, and Section B aims to test your UI testing experience using a simple registration form. 

# Section A (around 30 mins): 

In this section, you will utilise POST, GET, and DELETE requests to manipulate a JSON object. To complete this section, you will first need to download Postman. If you don't already have a copy of Postman, you can download it here: https://www.postman.com/downloads/. 
To make the API request themselves, you'll need to refer to the documentation which can be found here: https://restful-api.dev/. The table below displays the URLs that you'll need for this exercise: 

Request Type  | URL
------------- | --------------------------------------------
POST          | https://api.restful-api.dev/objects
GET           | https://api.restful-api.dev/objects/objectID
DELETE        | https://api.restful-api.dev/objects/objectID

Below are the steps you'll need to take to complete the task. You can utilise the template in the "postman" folder by importing it into Postman and using the included comment suggestions. However, if you feel confident, you can implement the steps in your own way.

### Step 1 - The POST request: 
1. Create a POST request with a JSON object as the body. 
2. The JSON object should contain a single data field which is populated with a random/unique number each time the POST request is submitted.
3. Validate that the expected 200 response code is returned.
4. The response body should contain an 'id' field - this will need to be included in the GET request's request URL.

### Step 2 - The GET request:
1. Create a GET request for a single object and populate the request URL with the ID from the POST request 
2. Validate that the expected 200 response code is returned 
3. Validate that the JSON object returned in the response contains the same random number as that which was sent in the POST request

### Step 3 - The DELETE request:
1. Create a DELETE request and populate the request URL with the ID from the POST request 
2. Validate that the expected 200 response code is returned 

### Step 4 - Export your work:
1. Export the postman/tests that you created in steps 1-3 by selecting the ellipse icon '...' and choosing the export option
2. Save the exported collection in a folder alongside any work from Section B. 

*Hint: If you are stuck with the syntax for the requests, validation, or for saving the 'id' etc., the Postman official website, the API documentation, and Stack Overflow can provide a wealth of information.* 

# Section B (around 30-45 mins): 

You are working as a QA Engineer at a company that's building a new web application. One of the developers at the company has just finished work a registration form to enable new users to create accounts; he has moved the user story ticket into QA and assigned it to you. The ticket that you are assigned is as follows: 
<i> 
### Description: 
As a new user of the application, I want to be able to register an account with a username/email address and a password. I should be able to read the terms of the application before deciding to register, and I must accept said terms before I create my account. When I submit the form, I want to be presented with an alert that shows me whether my registration was a success or whether there are any issues. 

### Acceptance Criteria:
1. I need to enter either an email or username - the format of which does not currently matter to this ticket
2. I need to enter a password with a minimum character count of 6, and a maximum character count of 16
3. I must be prompted to re-enter my password, and the entered value must match the password
4. I must be able to view the terms and conditions before I submit the form
5. I need to accept the terms and conditions before I can register
6. When I click the register button, I am shown an alert. The content of the alert will depend on whether the form was completed in line with the acceptance criteria. If the form doesn't adhere to points 1-5 of the acceptance criteria, the alert message will suggest a failure, and the form will fail to submit. However, if the form is completed as per the acceptance criteria, the alert will a success message, and the form will be submitted. </i>
## Your Task: 

### Step 1 - Set-up:
1. Clone this repo and change the directory to the 'ui' folder
2. Run `npm i` to create the node_modules folder (you may need to [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for this step)
3. Run `npx live-server` to run the webpage locally and select _'html > form.html'_ 

### Step 2 - Produce test cases:
1. Produce a set of test cases that you'd use to test the registration form and its acceptance criteria 

*Note: There's no need to produce a set of formal test cases, just a simple draft*

### Step 3 - Execute the test cases:
1. Execute the test cases that you created in step 2 and note down any issues that you find

### Optional - Fix errors:
1. If you feel confident in doing so, you may want to fix some of the errors that you found in Step 3
2. The errors will be confined to _'html > form.html'_ and _'javascript > form-validation.js'_
3. Add comments with a short description of the fix

### Step 4 - Upload your work:
1. Save any work you've done in a folder alongside Section A's Postman work. You will want to save: 
  - Your test cases 
  - Details of errors that you found
  - The _'form.html'_ and _'form-validation.js'_ files (if you completed the optional step)
2. Upload your work somewhere accessible to us, ideally to Github/Gitlab, and send us the link. 
### Optional - Send feedback:
We really welcome any feedback! Let us know what you thought of this exercise.
