 /// <reference types="cypress" />
import {Given, Then, When} from  "@badeball/cypress-cucumber-preprocessor"
import Base_PO from "../page-objects/Base_PO";
import HomePage_PO from "../page-objects/HomePage_PO";

//const basePage = new Base_PO();
const homepage = new HomePage_PO();

Given('I navigate to Wedriveruniversity  HomePage',()=>{
 homepage.navigate("");
 homepage.getPageTitle();
    
})

When('I click on contact us Button',()=>{
   //cy.clickAndOpenLink_InSameTab("#contact-us");
   homepage.clickOn_ContactUs_Button();

})


When('I click on the login portal button',()=>{
  //  cy.get("#contact-us").invoke("removeAttr","target").click();
    // cy.clickAndOpenLink_InSameTab("#login-portal");
     homepage.clickOn_LoginButton_Button();
 
 })

 Then('it should redirect to loginportal Page ',()=>{

 })





