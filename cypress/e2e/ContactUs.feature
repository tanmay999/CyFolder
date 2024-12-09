Feature:  WeDriverUniversity -Contact Us Page
Background: Pre-condition
When I wait for 2 sec

    Scenario: Valid User Contact Submission
    Given i navigate to Contact Us page
    When I type First Name
    And I Type LastName
    And I enter email Address
    And I enter a comment
    And I click on submit Button
    Then  I should pe presented with a successful contact us submission 

@contact-us
    Scenario: Invalid User email id and blank firstname Credential Contact Submission
    Given i navigate to Contact Us page
    When I Type LastName
    And I enter invalid email Address
    And I enter a comment
    And I click on submit Button
    Then  I should pe presented Error message1 and Error message 2

@smoke
    Scenario: Valid User Contact Submission-Using Specific Data
   Given i navigate to Contact Us page
    And I type specific First Name "sachin"
    And I Type specific LastName "tendulkar"
    And I type specific email Address "st@gmail.com"
    And I type a specific word "jhbcjkndkjnks" and number 7664787837 within the comment input field
    And I click on submit Button
    Then  I should pe presented with a successful contact us submission

@contact-us
    Scenario Outline: Validate Contact Page
       Given i navigate to Contact Us page
       And I type specific First Name <firstName> and a LastName '<lastName>'
       And I type  email '<email>' and comment '<comment>'
       And I click on submit Button
       Then  I should pe presented with a header text '<message>'

       Examples:
           |firstName  | lastName | email            |comment               |message                          |
           |Tanmay    | Rocky    | rocky@gmail.com  |   hello              |Thank You for your Message!       |
           |Tanmay    | Rocky    | rocky@yahoo.com  |   hello   7747847    |Thank You for your Message!       |
           |           | Rocky    | rocky@gmail.com  |   hello              |Error: all fields are required    |
           |Tanmay     | Rocky    | rocky            |   hello              |Error: Invalid email address      |


