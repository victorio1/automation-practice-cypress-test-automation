Feature: Verify Price Product

    Verify Price Product

    @e2e-test
    Scenario Outline: Verify Price Product
        Given I am at Automation Practice
        And I search "<Product>"
        When I change mode grid to list
        Then I verify price product is "<Price>"

        Examples:
        |   Product                 |   Price     |
        |   Blouse                  |   27.00     |
        |   Printed Dress           |   26.00     |
        |   Printed Chiffon Dress   |   16.40     |
        |   Printed Summer Dress    |   30.50     |
        |   Printed Dress           |   50.99     |