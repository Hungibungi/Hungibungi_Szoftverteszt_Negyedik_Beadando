Feature: Navigating to the Microsoft 365 To Do FAQ page and verifying title
  @test
  Scenario: Look up Microsoft 365 To Do FAQ
    Given I open the Microsoft web url
    And I click on the 'Támogatás' option in the menu
    And I click on the 'Microsoft 365' option in the list on Microsoft
    And I click on the 'To Do' option in the list on Microsoft
    Then I verify title of web page as 'To Do'