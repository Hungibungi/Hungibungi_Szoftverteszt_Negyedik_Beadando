//Visits the pages
Given('I open the Facebook web url', () => {
  cy.visit('https://www.facebook.com/');
});
Given('I open the Microsoft web url', () => {
  cy.visit('https://www.microsoft.com/');
});
Given('I open the Simplesite web url', () => {
  cy.visit('https://www.simplesite.com/');
});
Given('I open the Node.js web url', () => {
  cy.visit('https://nodejs.org/en/');
});
Given('I open the Steam web url', () => {
  cy.visit('https://store.steampowered.com/');
});
Given('I open the Python web url', () => {
  cy.visit('https://www.python.org/');
});
Given('I open the Okt.sed web url', () => {
  cy.visit('https://okt.sed.hu/');
});

//Verifies the title
Then('I verify title of web page as {string}', (title) => {
  cy.title().should('include', title);
});

//Clicks on the button
And('I click on the {string} option in the menu', (option) => {
  cy.contains(option).click({
    force: true,
  })
});

//Types in the data for Simplesite
And('I type in {string} as the {string} in Simplesite', (data, inputbox) => {
  if(inputbox == "username"){
    cy.get('#loginBox_username').type(data);
  } else {
    cy.get('#loginBox_password').type(data);
  }
});

//Accepts cookies for Simplesite
And('I accept the cookies', (option) => {
  cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click({
    force: true,
  })
});

//Presses the login button for Simplesite
And('I click on the Login button', () => {
  cy.get('#loginBox_loginbtn').click({
    force: true,
  })
});

//Checks the error message for Simplesite
And('I verify the error message should be visible', () => {
  cy.get('.ss-login-error').should('be.visible');
});

//Types in the data for Steam
And('I type in {string} as the {string} in Steam', (data, inputbox) => {
  if(inputbox == "email"){
    cy.get('#email').type(data);
  } else if(inputbox == "confirm email"){
    cy.get('#reenter_email').type(data);
  } else if(inputbox == "search"){
    cy.get('#store_nav_search_term').type(data);
  }
});

//Checks in the check box for Steam
And('I check the Betöltöttem a 13. életévemet, és elfogadom a Steam előfizetői szerződés és a Valve adatvédelmi szabályzat feltételeit. check box', () => {
  cy.get('#i_agree_check').check();
});

//Clicks the I am above 16 button for Steam
And('I click on the overAgeButton option in the menu', () => {
  cy.get('#overAgeButton').click({
    force: true,
  })
});

//Clicks the search button for Steam
And('I click on the search option in the menu', () => {
  cy.get('#store_search_link').click({
    force: true,
  })
});

//Clicks the AoE 3: DE button for Steam
And('I click on the {string} option in the list', (game) => {
  cy.get('#search_resultsRows').contains(game).click({
    force: true,
  })
});

//Types in the data for Python and presses the search button
And('I search for {string} in Python', (data) => {
  cy.get('#id-search-field').type(data);
  cy.get('#submit').click();
});

//Selects the correct version for Python
And('I select {string} from the dropdown menu', (data) => {
  cy.get('#version_select').select(data);
});

And('I click on the {string} option in the list on Microsoft', (data) => {
  cy.get('.supHomepageIcon').contains(data).click();
});

//Clicks the Blog button for Node.js
And('I click the Blog button', (data) => {
  cy.get('.sf-menu sf-js-enabled sf-arrows').contains('Blog').click();
});

//Types in the data for Okt.sed and presses the I am here button
And('I type in {string} in Okt.sed and press {string}', (code,button) => {
  cy.get('#neptun').type(code);
  cy.get('button').contains(button).click();
});

//Verifies the error msg
Then('I verify the error message as {string}', (error) => {
  cy.contains(error).should('be.visible');
});
