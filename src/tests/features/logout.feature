@logout
Feature: verify logout


  Background:
    Given I navigate to "https://practice.expandtesting.com/login"
    When I enter my username "practice"
    And I enter my password "SuperSecretPassword!"
    And I click on the button login
    Then I should see a message "You logged into a secure area!"

@logout
Scenario: Verify user is able to logout
When I click on the link Logout 
Then  should see a message "You logged out of the secure area!"
