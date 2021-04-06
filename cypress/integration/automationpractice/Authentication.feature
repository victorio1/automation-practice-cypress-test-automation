Feature: Authentication

    application Regression
    @register-account
    Scenario Outline: Create Account Passed
        Given I am at Automation Practice while I select the option create an account and I complete my "<email>"
        And I complete information such as "<tittle>", "<firstname>", "<lastname>", "<password>", "<day>", "<month>" and "<year>"
        When I complete the information about my address such as "<company>", "<address>", "<address2>", "<city>","<country>", "<zip>"
        And I continue to complete with "<state>", "<additionalinformation>", "<homephone>", "<mobilephone>" and "<referenceaddress>"
        And Finally I select the button Register for the creation about the account
        Then I verify the "<firstname>" and "<lastname>" account is log in how session active

        Examples:
            | email                      | tittle | firstname | lastname | password | day | month | year | company | address  | address2     | city  | state   | zip   | country       | additionalinformation | homephone | mobilephone | referenceaddress |
            | evictorio.uni748@gmail.com | Mr     | Roberexd  | xdfxdxd  | Kj123s   | 3   | March | 1997 | Belcorp | Av. Grau | Av. Aviación | Lince | Alabama | 07031 | United States | Elpepe                | 940478546 | 940478452   | don pepe         |

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
