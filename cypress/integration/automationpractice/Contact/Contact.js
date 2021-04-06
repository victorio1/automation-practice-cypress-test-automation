/// <reference types="Cypress"/>

import ContactAction from '../../../actions/contactAction'
import HomeAction from '../../../actions/homeAction'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import contactAction from '../../../actions/contactAction';

const contactaction = new ContactAction()
const homeaction = new HomeAction()

Given('I am at Automation Practice while I select the option Contact Us', () => {
    
    cy.visit(Cypress.env('url'))

})

And('I complete the information about {string}, {string}', (subjectHeadling,email) => {

    homeaction.clickContactUs()
    contactaction.selectListSubjectHeading(subjectHeadling)
    contactaction.writeEmailAddress(email)

})

When('I complete the {string} and I write the {string}', (orderReference,message) => {

    contactaction.writeMessage(message)
    contactaction.writeOrderReference(orderReference)

})

And('I choose the file for Attach File', () => {

    contactaction.clickChooseFile()
    contactaction.clickSendContact()

})

Then('I verify the {string} for email was sent', (text) => {

    contactaction.verifyLabelEmailSend(text)

})