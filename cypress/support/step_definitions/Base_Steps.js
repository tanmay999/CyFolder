/// <Reference types="cypress" />
import { After,Before,When } from "@badeball/cypress-cucumber-preprocessor";


Before(()=>{
   cy.log("Executes before in exh step"); 
   cy.clearLocalStorage();
})

After({tags:"@smoke"},()=>{
    cy.log("after smoke test tags");
})

After(()=>{
    cy.log("after");
})

When("I wait for {int} sec",(seconds)=>{
cy.wait(seconds*1000);
})