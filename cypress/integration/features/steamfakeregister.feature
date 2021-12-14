Feature: Navigating to Steam and trying to register with fake data (it shouldn't redirect as we didn't pass the Capthca)
  @test
  Scenario: Typing in fake info and trying register
    Given I open the Steam web url
    And I click on the 'login' option in the menu
    And I click on the 'Csatlakozás a Steamhez' option in the menu
    And I type in 'test.gmail.com' as the 'email' in Steam
    And I type in 'test.gmail.com' as the 'confirm email' in Steam
    And I check the Betöltöttem a 13. életévemet, és elfogadom a Steam előfizetői szerződés és a Valve adatvédelmi szabályzat feltételeit. check box
    And I click on the overAgeButton option in the menu
    Then I verify title of web page as 'Fiókod létrehozása'