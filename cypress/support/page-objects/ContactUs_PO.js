/// <reference types="cypress"/>

import Base_PO from "./Base_PO";


class ContactUs_PO extends Base_PO{

    elements  ={
        firstNameTextField : ()=>cy.get('[name="first_name"]'),
        lastNameTextField  : ()=>cy.get('[name="last_name"]'),
        emailField         :()=>cy.get('[name="email"]'),
        commentTextFlied   :()=>cy.get('textarea[name="message"]'),
        submitButton       :()=>cy.get('[type="submit"]'),
        submission_Header_Text  :()=>cy.xpath("//h1|//body")

    }

    navigateTo_ContactUs_Page(){
        super.navigate("Contact-Us/contactus.html");
    }

    type_FirstName(){
        this.elements.firstNameTextField().type("JOE");
        //cy.get('[name="first_name"]').type(firstName);
    }

    type_FirstName(firstName){
        this.elements.firstNameTextField().type(firstName);
        //cy.get('[name="first_name"]').type(firstName);
    }

    type_LastName(lastName){
        this.elements.lastNameTextField().type(lastName);
       // cy.get('[name="last_name"]').type(lastName);
    }

    type_EmailAddress(email){
        this.elements.emailField().type(email);
       // cy.get('[name="email"]').type(email);
    }
    type_Comment(comment){
        this.elements.commentTextFlied().type(comment);
       // cy.get('textarea[name="message"]').type("hb fbcjnkjdsnkcjndlkmclksmdlkckm");
    }
    clickOn_Submit(){
        this.elements.submitButton().click;
    }

    validate_Submission_Header(expectedText){
        this.elements.submission_Header_Text().contains(expectedText);
       // this.elements.submission_Header_Text().invoke('text').should('include',expectedText);
    }


}

export default ContactUs_PO;
