Feature: Authentication

    application Regression

    Scenario Outline: Create Account Passed
        Given I am at Automation Practice while I select the option create an account and I complete my "<email>"
        And I complete information such as "<tittle>", "<firstname>", "<lastname>", "<password>", "<day>", "<month>" and "<year>"
        When I complete the information about my address such as "<company>", "<address>", "<address2>", "<city>", "<state>", "<zip>"
        And I continue to complete with "<country>", "<additionalinformation>", "<homephone>", "<mobilephone>" and "<referenceaddress>"
        And Finally I select the button Register for the creation about the account
        Then I verify the name's account is the same firstname and lastname but both together

        Examples:
            | email                      | tittle | firstname | lastname | password | day | month | year | company | address  | address2     | city  | state      | zip   | country       | additionalinformation | homephone | mobilephone | referenceaddress                    |
            | evictorio.uni448@gmail.com | Mr     | Roberto   | Chong    | abcde    | 3   | March | 1997 | Belcorp | Av. Grau | Av. Aviación | Lince | California | 07031 | United States | Elpepe                | 940478546 | 940478452   | Al frente del mercadito de don pepe |