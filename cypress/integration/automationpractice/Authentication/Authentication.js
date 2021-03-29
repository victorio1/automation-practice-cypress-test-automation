/// <reference types="Cypress"/>
import Homepage from '../../../support/pageObjects/home-page'
import Authenticationaction from '../../../actions/authenticationAction'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import authenticationAction from '../../../actions/authenticationAction';

const homepage = new Homepage()
const authenticationaction = new Authenticationaction()

let user
let password

Given('I am at Automation Practice', () => {

    cy.visit(Cypress.env('url'));
      
})

And('I try to login into the webpage', function () {

    homepage.getButtonSignIn().click()

})

When('I write my email and password', function() {

    authenticationaction.writeEmail('evictorio.uni@gmail.com')
    authenticationaction.writePassword('1234567')
    authenticationaction.clickSignIn()

})


Then('I verify the user is Eduardo Victorio', function(){

    homepage.getTextLabelUser().should('have.text','Eduardo Victorio')
})

When('I write my account', function(dataTable){

    user = dataTable.rawTable[1][0]
    password = dataTable.rawTable[1][1] 

    authenticationaction.writeEmail(dataTable.rawTable[1][0])
    authenticationaction.writePassword(dataTable.rawTable[1][1])
    authenticationaction.clickSignIn()
})

Then('I verify the user was not logged in', function(){

    homepage.getTextLoginFailed().should('have.text','Authentication failed.')

})

When('I select the option Forgot', function() {
    
    authenticationaction.clickForgotMyPassword()

})

And('I write my {string}', (email) => {

    authenticationaction.writeEmailAddress(email)
    authenticationaction.clickRetrievePassword()

})

Then('I verify the {string} for email was sent', (text) => {

    authenticationaction.verifyEmailSent(text)

})