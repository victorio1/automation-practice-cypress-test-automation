Feature: Search Product

    application Regression

    @searchProduct2 @e2e-test
    Scenario: Search Product
    Given I am at Automation Practice
    And I search product blouse
    When I change mode grid to list
    And I add the product to Cart
    Then I verify the value cart is 1