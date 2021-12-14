Feature: Navigating to Okt.sed and trying the I am here function with fake code
  @test
  Scenario: Faking the I am here function
    Given I open the Okt.sed web url
    And I click on the 'Ugrás' option in the menu
    And I type in 'TEST12' in Okt.sed and press 'Jelen vagyok az órán'
    Then I verify the error message as 'Jelenlét rögzítése sikertelen'