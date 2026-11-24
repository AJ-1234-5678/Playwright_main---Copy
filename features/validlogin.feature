Feature: login verification with valid credentials

Scenario: Valid credential login
Given User is on the Login page
When User logs in with valid credentials "standard_user" and "secret_sauce"
Then Verify Dashboard page is loaded

Scenario: Login verification with multiple users
Given User is on the Login page
When User logs in using credentials from "multicredentials.json"

@smoke
Scenario Outline: Login functionality
Given User is on the Login page
When User logs in with valid credentials username "<username>" and password "<password>"
Then Verify Dashboard page is loaded

Examples:
|username     | password|
|standard_user| secret_sauce|
|problem_user | secret_sauce|
