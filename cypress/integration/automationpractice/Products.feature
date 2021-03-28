Feature: Products

    application Regression

    @searchProduct2 @e2e-test
    Scenario: Search Product
        Given I am at Automation Practice
        And I search product blouse
        When I change mode grid to list
        And I add the product to Cart
        Then I verify the value cart is 1

    @e2e-test
    Scenario Outline: Verify Price Product
        Given I am at Automation Practice
        And I search "<Product>"
        When I change mode grid to list
        Then I verify price product is "<Price>"

        Examples:
            | Product               | Price |
            | Blouse                | 27.00 |
            | Printed Dress         | 26.00 |
            | Printed Chiffon Dress | 16.40 |
            | Printed Summer Dress  | 30.50 |
            | Printed Dress         | 50.99 |

    @e2e-test
    Scenario: Verify Price Product 2
        Given I am at Automation Practice
        And I search Blouse
        When I change mode grid to list
        Then I verify price product is 27