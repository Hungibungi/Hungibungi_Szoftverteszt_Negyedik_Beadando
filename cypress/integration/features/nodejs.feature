Feature: Navigating to Node.js and looking up the Node v14.3 download page
  @test
  Scenario: Getting the download page for V14.3
    Given I open the Node.js web url
    And I click on the 'News' option in the menu
    And I click on the 'Older >' option in the menu
    And I click on the 'Node v14.3.0 (Current)' option in the menu
    Then I verify title of web page as 'Node v14.3.0 (Current)'