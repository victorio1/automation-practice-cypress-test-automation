Feature: Contact

    Contact xddx

    @e2e-test
    Scenario Outline:  Contact for an Issue Passed
        Given I am at Automation Practice while I select the option Contact Us
        And I complete the information about "<SubjectHeadling>", "<Email>"
        When I complete the "<orderReference>" and I write the "<Message>"
        And I choose the file for Attach File
        Then I verify the "<Text>" for email was sent

        Examples:
            | SubjectHeadling  | Email               | orderReference | Message   | Text                                                 |
            | Customer service | evictorio@gmail.com | 123            | Eduardito | Your message has been successfully sent to our team. |