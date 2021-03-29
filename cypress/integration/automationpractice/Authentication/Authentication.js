/// <reference types="Cypress"/>
import HomeAction from '../../../actions/homeAction'
import AuthenticationAction from '../../../actions/authenticationAction'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import authenticationLocators from '../../../locators/authenticationLocators';

const authenticationaction = new AuthenticationAction()
const homeaction = new HomeAction()

let user
let password

Given('I am at Automation Practice', () => {

    cy.visit(Cypress.env('url'));
      
})

And('I try to login into the webpage', function () {

    homeaction.clickSignIn()

})

When('I write my email and password', function() {

    authenticationaction.writeEmail('evictorio.uni@gmail.com')
    authenticationaction.writePassword('1234567')
    authenticationaction.clickSignIn()

})


Then('I verify the user is Eduardo Victorio', function(){

    homeaction.verifyUser('Eduardo Victorio')
})

When('I write my account', function(dataTable){

    user = dataTable.rawTable[1][0]
    password = dataTable.rawTable[1][1] 

    authenticationaction.writeEmail(dataTable.rawTable[1][0])
    authenticationaction.writePassword(dataTable.rawTable[1][1])
    authenticationaction.clickSignIn()
})

Then('I verify the user was not logged in', function(){

    homeaction.verifyLoginFailed('Authentication failed.')
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

Given('I am at Automation Practice while I select the option create an account and I complete my {string}',  (email) => {

    cy.visit(Cypress.env('url'));
    
    homeaction.clickSignIn()
    authenticationaction.writeEmailforCreateAnAccount(email)
    authenticationaction.clickCreateAnAccount()

})

And('I complete information such as {string}, {string}, {string}, {string}, {string}, {string} and {string}', (tittle,firstname,lastname,password,day,month,year) => {

    if(tittle='Mr'){

    authenticationaction.clickTittleMr()

    } else if (tittle='Mrs') {

    authenticationaction.clickTittleMrs()

    } else {

      print("error")  

    }

    authenticationaction.writeFirstName(firstname)
    authenticationaction.writeLastName(lastname)
    authenticationaction.writeCreatePassword(password)
    authenticationaction.selectDay(day)
    authenticationaction.selectMonth(month)
    authenticationaction.selectYear(year)

})