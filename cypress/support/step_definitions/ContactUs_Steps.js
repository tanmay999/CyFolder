/// <reference types="cypress" />
import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";

 import ContactUs_PO from "../page-objects/ContactUs_PO";
 import Base_PO from "../page-objects/Base_PO";

 const contactUsPage = new ContactUs_PO;
 const basePage      = new Base_PO;

 When('i navigate to Contact Us page',()=>{
contactUsPage.navigateTo_ContactUs_Page();
 })

 When('i navigate to Wedriver Page',()=>{
    basePage.navigate("");
 })

When('I type First Name',()=>{
   // cy.get('[name="first_name"]').type("Tan");
   contactUsPage.type_FirstName("Tan");
})


When('I Type LastName',()=>{
    contactUsPage.type_LastName("Don");
    
})


When('I enter email Address',()=>{
    contactUsPage.type_EmailAddress("t98u84u@gmail.com");
    
})

When('I enter a comment',()=>{
    contactUsPage.type_Comment("hb fbcjnkjdsnkcjndlkmclksmdlkckm");
   // cy.get('textarea[name="message"]').type("hb fbcjnkjdsnkcjndlkmclksmdlkckm");
    
})


When('I click on submit Button',()=>{
    contactUsPage.clickOn_Submit();
    
})

Then('I should pe presented with a successful contact us submission',()=>{
    contactUsPage.validate_Submission_Header("Thank You for your Message!");
  //cy.get('h1').should('have.text','Thank You for your Message!');
})

When('I enter invalid email Address',()=>{
    contactUsPage.type_EmailAddress("TanPaail.com");
  //  cy.get('[name="email"]').type("TanPaail.com")
})

Then('I should pe presented Error message1 and Error message 2',()=>{
    contactUsPage.validate_Submission_Header('Error: all fields are required');
    contactUsPage.validate_Submission_Header('Error: Invalid email address');
   // cy.get('body').contains('Error: all fields are required');
  //  cy.get('body').contains('Error: Invalid email address');
})


When('I type specific First Name {string}',(firstName)=>{
    contactUsPage.type_FirstName(firstName);
   // cy.get('[name="first_name"]').type(firstName);
})

When('I Type specific LastName {string}',(lastName)=>{
    contactUsPage.type_LastName(lastName);
  //  cy.get('[name="last_name"]').type(lastName)
})

When('I type specific email Address {string}',(email)=>{
    contactUsPage.type_EmailAddress(email);
  //  cy.get('[name="email"]').type(email);
})

When('I type a specific word {string} and number {int} within the comment input field', (word, number) => {
    cy.get('textarea[name="message"]').type(word + " " + number);
})


When('I type specific First Name {word} and a LastName {string}',(firstName,lastName)=>{
    contactUsPage.type_FirstName(firstName);
    contactUsPage.type_LastName(lastName);
  //  cy.get('[name="first_name"]').type(firstName);
  //  cy.get('[name="last_name"]').type(lastName);
})

When('I type  email {string} and comment {string}',(email,comment)=>{
    contactUsPage.type_EmailAddress(email);
    contactUsPage.type_Comment(comment);
  //  cy.get('[name="email"]').type(email);
  //  cy.get('textarea[name="message"]').type(comment);
})

Then('I should pe presented with a header text {string}',(message)=>{
    //cy.xpath("//h1|//body").contains(message);
    contactUsPage.validate_Submission_Header(message);

    })

    