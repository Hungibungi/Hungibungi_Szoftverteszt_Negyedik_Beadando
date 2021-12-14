Feature: Navigating to facebook.com and verifying title
  @test
  Scenario: Perform Navigation
    Given I open the Facebook web url
    Then I verify title of web page as 'Facebook'