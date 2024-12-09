/// <reference types="cypress" />

import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page-objects/Login_PO";

const longinPage = new Login_PO;
let stub;

Given('I navigate to Wedriveruniversity Login page',()=>{
  longinPage.navigateTo_Login_Page();
})


When('I type a Username {}',(username)=>{
 longinPage.getPageTitle();
 longinPage.type_Username(username);

})

When('I type a password {}',(password)=>{
longinPage.type_Password(password);
})

When('I click on the login button',()=>{
    stub = cy.stub();
    cy.on('window:alert',stub);
    longinPage.clickOn_Login_Button();
})


Then('I should be presented with a alertbox  which contains {string}', (expectedAlertText) => {
    expect(stub).to.have.been.calledWith(expectedAlertText);
})