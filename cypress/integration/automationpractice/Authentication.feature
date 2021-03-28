Feature: Authentication

    application Regression

    @login @e2e-test
    Scenario: Login Passed
        Given I am at Automation Practice
        And I try to login into the webpage
        When I write my email and password
        Then I verify the user is Eduardo Victorio

    Scenario: Login Failed
        Given I am at Automation Practice
        And I try to login into the webpage
        When I write my account
            | user             | password  |
            | pepito@gmail.com | failedpsd |
        Then I verify the user was not logged in

    Scenario Outline: Forgot your password Passed
        Given I am at Automation Practice
        And I try to login into the webpage
        When I select the option Forgot
        And I write my "<Email>"
        Then I verify the "<Text>" for email was sent

        Examples:
            | Email                   | Text                                                                        |
            | evictorio.uni@gmail.com | A confirmation email has been sent to your address: evictorio.uni@gmail.com |