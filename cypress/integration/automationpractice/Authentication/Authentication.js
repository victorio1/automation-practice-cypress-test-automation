/// <reference types="Cypress"/>
import Homepage from '../../../support/pageObjects/home-page'
import Authenticationpage from '../../../support/pageObjects/authentication-page'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homepage = new Homepage()
const authenticationpage = new Authenticationpage()

let user
let password

Given('I am at Automation Practice', () => {

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

When('I write my account', function(dataTable){

    user = dataTable.rawTable[1][0]
    password = dataTable.rawTable[1][1] 

    authenticationpage.getTextBoxEmail().type(dataTable.rawTable[1][0])
    authenticationpage.getTxtBoxPassword().type(dataTable.rawTable[1][1])
    authenticationpage.getButtonSignIn().click()

})

Then('I verify the user was not logged in', function(){

    homepage.getTextLoginFailed().should('have.text','Authentication failed.')

})

When('I select the option Forgot', function() {

    authenticationpage.getButtonForgotMyPassword().click()

})

And('I write my {string}', (email) => {

   authenticationpage.getTxtBoxEmailAddress().type(email)
   authenticationpage.getButtonRetrievePassword().click()

})

Then('I verify the {string} for email was sent', (text) => {

    authenticationpage.getTextLabelEmailSent().should('have.text',text)

})