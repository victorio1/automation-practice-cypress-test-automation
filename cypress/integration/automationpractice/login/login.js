/// <reference types="Cypress"/>
import Homepage from '../../../support/pageObjects/home-page'
import Authenticationpage from '../../../support/pageObjects/authentication-page'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homepage = new Homepage()
const authenticationpage = new Authenticationpage()

Given('I am at Automation Practice',()=>{

    cy.visit(Cypress.env('url'));
    
})

And('I try to login into the webpage', function () {

    homepage.getButtonSignIn().click()

})

When('I write my email and password', function() {

    authenticationpage.getTextBoxEmail().type('evictorio.uni@gmail.com')
    authenticationpage.getTxtBoxPassword().type('1234567')
    authenticationpage.getButtonSignIn().click()

})


Then('I verify the user is Eduardo Victorio', function(){

    homepage.getTextLabelUser().should('have.text','Eduardo Victorio')
})