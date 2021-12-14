Feature: Navigating to Steam and searching for Age of Empires 3: DE
  @test
  Scenario: Searching for the game
    Given I open the Steam web url
    And I type in 'Age of Empires III: Definitive Edition' as the 'search' in Steam
    And I click on the search option in the menu
    And I click on the 'Age of Empires III: Definitive Edition' option in the list
    Then I verify title of web page as 'Age of Empires III: Definitive Edition'