@PasswordChecker
Feature: Secure Password Checker

  Background:
    Given I go to "https://practice.expandtesting.com/secure-password-checker"

  @valid
  Scenario: Verify messages disappear when a strong password is entered
    When I enter a password "Nesrinesenkez1"
    Then I should not see any messages

  @invalid
  Scenario: Verify error messages still appear when a weak password is entered
    When I enter a password "<password>"
    Then I should see an error message "<msgErr>"

    Examples:
      | password       | msgErr                                      |
      | NESRINESENKEZ1 | Must contain a lowercase letter.            |
      | nesrinesenkez1 | Must contain an uppercase letter.           |
      | Nesrinesenkez  | Must contain a number or special character. |
