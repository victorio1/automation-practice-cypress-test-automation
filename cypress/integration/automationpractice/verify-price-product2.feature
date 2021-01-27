Feature: Verify Price Product 2

    Verify Price Product

    @e2e-test
    Scenario: Verify Price Product 2
        Given I am at Automation Practice
        And I search Blouse
        When I change mode grid to list
        Then I verify price product is 27