Feature: Navigating to the Microsoft 365 page and verifying title
  @test
  Scenario: Look up Microsoft 365
    Given I open the Microsoft web url
    And I click on the 'Microsoft 365' option in the menu
    Then I verify title of web page as 'Microsoft 365'