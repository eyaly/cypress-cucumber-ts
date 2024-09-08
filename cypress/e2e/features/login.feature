Feature: Login functionality

  Scenario: User logs into the app
    Given I open the login page
    When I submit my credentials
    Then I should see the dashboard