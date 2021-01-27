Feature: Login

    application Regression

    @login @e2e-test
    Scenario: Login Passed
    Given I am at Automation Practice
    And I try to login into the webpage
    When I write my email and password
    Then I verify the user is Eduardo Victorio