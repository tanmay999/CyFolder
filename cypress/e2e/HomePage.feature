Feature: webDriver university Home page

Scenario: Validate redirection on clicking LoginPortal text 

Given  i navigate to Wedriver Page
When we click on Login portal link
Then it should redirect to loginportal Page 
And  we can see Usrename, passord and sumit button
