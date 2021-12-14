Feature: Navigating to Simplesite and trying to log in with incorrect password
  @test
  Scenario: Logging in with fake info
    Given I open the Simplesite web url
    And I accept the cookies
    And I click on the 'Log in' option in the menu
    And I type in 'Test' as the 'username' in Simplesite
    And I type in 'Test' as the 'password' in Simplesite
    And I click on the Login button
    Then I verify the error message should be visible