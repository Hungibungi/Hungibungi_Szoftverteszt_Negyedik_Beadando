Feature: Navigating to Python and looking up the Python 2.0.1 page
  @test
  Scenario: Getting the Python 2.0.1 page
    Given I open the Python web url
    And I search for 'Python 2.0.1' in Python
    And I click on the 'Python 2.0.1' option in the menu
    Then I verify title of web page as 'Python 2.0.1'