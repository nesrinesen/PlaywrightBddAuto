@login
Feature: verify login
Verify user is able to login with valid and invalid credentials

  Background:
    Given I navigate to "https://practice.expandtesting.com/login"

  @loginValide
  Scenario: Verify user is able to login with valid credentials
    When I enter my username "practice"
    And I enter my password "SuperSecretPassword!"
    And I click on the button login
    Then I should see a message "You logged into a secure area!"

  @invalidLogin
  Scenario: Verify user is unable to login with invalid credentials
    When I enter my username "<username>"
    And I enter my password "<password>"
    And I click on the button login
    Then I should see a message "<msgErr>"

    Examples:
      | username | password       | msgErr                    |
      | practice | WrongPassword! | Your password is invalid! |
      |          |                | Your username is invalid! |
      | wrong    |                | Your username is invalid! |
      |          | password       | Your username is invalid! |
