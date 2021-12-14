Feature: Navigating to Python and looking up FAQ for 2.7
  @test
  Scenario: Getting the Python 2.7 page
    Given I open the Python web url
    And I click on the 'Docs' option in the menu
    And I select '2.7' from the dropdown menu
    Then I verify title of web page as 'Python 2.7'