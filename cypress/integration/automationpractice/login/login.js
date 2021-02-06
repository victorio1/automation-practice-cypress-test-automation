/// <reference types="Cypress"/>
import authenticationAction from '../../../actions/authenticationAction'
import HomeAction from '../../../actions/homeAction'

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homeaction = new HomeAction()
const authenticationaction = new authenticationAction()

let userExpected = 'Eduardo Victorio'
let email = 'evictorio.uni@gmail.com'
let password = '1234567'

Given('I am at Automation Practice',()=>{

    cy.visit(Cypress.env('url'));
    
})

And('I try to login into the webpage', function () {
    
    homeaction.clickSignIn()

})

When('I write my email and password', function() {

    authenticationaction.writeEmail(email)
    authenticationaction.writePassword(password)
    authenticationaction.clickSignIn()

})


Then('I verify the user is Eduardo Victorio', function(){

    homeaction.verifyUser(userExpected)
    
})