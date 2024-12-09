Feature: Login in webuniversity portal

Background: Pre-condition
When I wait for 0 sec


Scenario Outline: Validate valid and Invaild login credential
    Given I navigate to Wedriveruniversity Login page
     And I type a Username <username>
     And I type a password <password>
     And I click on the login button
     Then I should be presented with a alertbox  which contains '<expectedAlertText>'

     Examples:
     |username |password    |expectedAlertText   |
     |webdriver|webdriver123|validation succeeded|
     |webDriver|webdriver123|validation failed   |
     |joe      |pass        |validation failed  |

